
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Blog = () => {
  const isMobile = useIsMobile();
  
  const posts = [
    {
      title: "First Blog Post",
      date: "2024-01-15",
      excerpt: "This is a brief excerpt from your first blog post...",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Second Blog Post",
      date: "2024-01-10",
      excerpt: "This is a brief excerpt from your second blog post...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={`min-h-screen ${isMobile ? 'pt-20' : 'pt-24'} animate-fade-in mobile-padding`}>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent gradient-text">Blog</h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="rounded-lg border hover:border-primary transition-all duration-300 overflow-hidden hover-lift card-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <time className="text-sm text-muted-foreground mb-4 block">
                  {post.date}
                </time>
                <p className="text-foreground/80">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
