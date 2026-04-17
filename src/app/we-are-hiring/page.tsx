import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Alert01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We're Hiring",
  description:
    "Join Deviators Club! Explore open positions and be part of our innovative tech community.",
};

function PostCard({ post }: { post: (typeof posts)[0] }) {
  const expired = new Date() > new Date(post.expiresOn);

  return (
    <Card
      className={`border-white/10 bg-white/5 backdrop-blur-sm ${expired ? "opacity-75" : "hover:border-brand/50"} relative shadow-lg transition-colors`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg text-white sm:text-xl">
            {post.title}
          </CardTitle>
          {expired ? (
            <span className="ml-2 flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-1 text-xs whitespace-nowrap text-red-400">
              <HugeiconsIcon icon={Alert01Icon} size={12} />
              Expired
            </span>
          ) : (
            <span className="ml-2 flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-xs whitespace-nowrap text-green-400">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} />
              Active
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-gray-400 sm:text-base">
          {post.description}
        </p>
        {!expired && <CountdownTimer expiresOn={post.expiresOn} />}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Posted: {new Date(post.postedOn).toLocaleDateString()}
          </span>
          <Link href={post.link} target="_blank" rel="noopener noreferrer">
            <Button
              disabled={expired}
              className={
                expired
                  ? "cursor-not-allowed opacity-50"
                  : "bg-brand hover:bg-brand-dark border-0 text-white"
              }
            >
              {expired ? "Closed" : "Apply Now"}
              {!expired && (
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  className="ml-1"
                />
              )}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HiringPage() {
  const activePosts = posts.filter(
    (post) => new Date() <= new Date(post.expiresOn),
  );
  const expiredPosts = posts.filter(
    (post) => new Date() > new Date(post.expiresOn),
  );

  return (
    <div className="min-h-screen pt-20 text-white lg:pt-24">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-6 bg-white bg-clip-text text-5xl font-bold text-transparent">
            We&apos;re Hiring
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Join our team and be part of something amazing. We&apos;re looking
            for passionate individuals who want to make a difference in the tech
            community.
          </p>
        </div>

        {activePosts.length > 0 ? (
          <div className="space-y-6">
            {activePosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <Card className="mx-auto max-w-2xl border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                No Open Positions
              </h2>
              <p className="text-gray-400">
                We don&apos;t have any openings right now, but stay tuned for
                future opportunities!
              </p>
            </CardContent>
          </Card>
        )}

        {expiredPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold text-gray-400">
              Past Positions
            </h2>
            <div className="space-y-4">
              {expiredPosts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
