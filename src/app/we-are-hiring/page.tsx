import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import posts from "@/data/posts";
import { CountdownTimer } from "@/components/CountdownTimer";
import { POST } from "@/types/post";
import { Metadata } from "next";
import { metaDataBase } from "@/data/metaData";

interface PostCardProps {
  post: POST;
}

const isPostExpired = (expiryDate: Date): boolean => {
  return new Date(expiryDate) <= new Date();
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const expired = isPostExpired(post.expiresOn);

  return (
    <Card
      className={`border-[#2A2A4A] bg-[#1A1A2E]/50 backdrop-blur-sm ${expired ? "opacity-75" : "hover:border-purple-500/50"} relative shadow-lg transition-colors`}
    >
      <CardHeader>
        <CardTitle className="mb-5 text-lg text-white xl:text-xl">
          {post.title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {post.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Dates Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar size={16} />
            <span>Posted: {new Date(post.postedOn).toLocaleDateString()}</span>
          </div>

          {!expired && <CountdownTimer expiresOn={post.expiresOn} />}
        </div>

        <Button
          className={`w-full gap-2 shadow-md ${
            expired
              ? "cursor-not-allowed bg-gray-600 opacity-50"
              : "border-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          } `}
          asChild={!expired}
          disabled={expired}
        >
          {expired ? (
            <span>Position Closed</span>
          ) : (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ExternalLink size={16} />
            </a>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function Page() {
  const sortedPosts = [...posts].sort((a, b) => {
    const aExpired = isPostExpired(a.expiresOn);
    const bExpired = isPostExpired(b.expiresOn);
    if (aExpired === bExpired) {
      return new Date(b.postedOn).getTime() - new Date(a.postedOn).getTime();
    }
    return aExpired ? 1 : -1;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#2A1A3A] pt-20 text-white lg:pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            We&apos;re Hiring!
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Join our rebellion and help us push the boundaries of what&apos;s
            possible.
          </p>
        </div>

        {sortedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <Card className="mx-auto max-w-2xl border-[#2A2A4A] bg-[#1A1A2E]/50 shadow-lg backdrop-blur-sm">
            <CardContent className="py-12 text-center">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                No Positions Available
              </h3>
              <p className="mb-6 text-gray-300">
                We don&apos;t have any positions right now, but the rebellion is
                always growing!
              </p>
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
              >
                Check Back Later
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  ...metaDataBase,
  title: "We're Hiring | Deviators Club",
};
