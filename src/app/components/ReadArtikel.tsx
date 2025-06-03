'use client';

import React from "react";
import { Clock, User } from "lucide-react";

// Komponen Card
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className || ''}`} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-600 ${className || ''}`} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Badge Component
type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline";
  className?: string;
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-600 text-white hover:bg-gray-700",
    outline: "text-gray-900 border-gray-300"
  };

  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className || ''}`} {...props} />
  );
}

// Separator Component
const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
  }
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <div
    ref={ref}
    role={decorative ? "none" : "separator"}
    aria-orientation={orientation}
    className={`shrink-0 bg-gray-200 ${
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
    } ${className || ''}`}
    {...props}
  />
));
Separator.displayName = "Separator";

// Props Type
type ArtikelProps = {
  artikel: {
    id: string;
    judul: string;
    content: string;
    imageUrl?: string;
    author: string;
    createdAt: string;
  };
};

const ReadArtikel = ({ artikel }: ArtikelProps) => {
  const explorationCards = [
    {
      title: "Lure Exploration",
      description: "Exploring the mysteries of cosmic phenomena and their impact on our understanding of the universe.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      badge: "Featured"
    },
    {
      title: "Nature Exploration",
      description: "Discovering the wonders of natural cosmic events and their scientific implications.",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      title: "Stellar Journey",
      description: "Journey through the cosmos and uncover the secrets of stellar formations.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop",
      badge: "New"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">{artikel.judul}</h1>

          <Separator className="my-6" />

          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{artikel.author}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{new Date(artikel.createdAt).toLocaleDateString("id-ID")}</span>
            </div>
          </div>

          <Separator className="mt-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Image */}
        {artikel.imageUrl && (
          <div className="mb-8">
            <img
              src={artikel.imageUrl}
              alt={artikel.judul}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6 whitespace-pre-line">
            {artikel.content}
          </div>
        </article>

        {/* Recommended Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {explorationCards.map((card, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    variant={
                      card.badge === 'Featured'
                        ? 'default'
                        : card.badge === 'Popular'
                        ? 'secondary'
                        : 'outline'
                    }
                    className="absolute top-2 left-2"
                  >
                    {card.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReadArtikel;
