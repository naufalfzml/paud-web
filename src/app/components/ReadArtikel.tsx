import React from "react";
import { Clock, User } from "lucide-react";

// Card Components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className || ''}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-gray-600 ${className || ''}`}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props} />
))
CardContent.displayName = "CardContent"

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
    <div 
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className || ''}`} 
      {...props} 
    />
  )
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
))
Separator.displayName = "Separator"

const ViewArticle = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Lorem Ipsum Judule ng kene
          </h1>
          
          <Separator className="my-6" />
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Opat Dwi</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Apr 2, 2025</span>
            </div>
          </div>
          
          <Separator className="mt-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=400&fit=crop"
            alt="Cosmic phenomenon with swirling lights and stellar formations"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dolor sit amet nunc tincidunt consequat. Sed auctor, magna eu tincidunt tincidunt, nunc nisl aliquam nunc, eu aliquam nunc nisl sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in efficitur magna, nec vestibulum nunc. Sed auctor, magna eu tincidunt tincidunt, nunc nisl aliquam nunc, eu aliquam nunc nisl sit amet nunc.
            </p>

            <p>
              Proin volutpat magna at lorem volutpat dignissim. Sed nulla nulla, dignissim in tempor eu, tempor quis tellus. Nulla facilisi. Donec auctor leo quis nulla. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
            </p>

            <p>
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
            </p>

            <p>
              Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus.
            </p>

            <p>
              Phasellus augue ipsum, cursus sit amet, fringilla vel, cursus in, eros ut erat. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
            </p>
          </div>
        </article>

        {/* Recommended Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {explorationCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant={card.badge === "Featured" ? "default" : card.badge === "Popular" ? "secondary" : "outline"}
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
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewArticle