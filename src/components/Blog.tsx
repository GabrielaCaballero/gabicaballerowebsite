const Blog = () => {
  const posts = [
    {
      title: "First Blog Post",
      date: "2024-01-15",
      excerpt: "This is a brief excerpt from your first blog post...",
    },
    {
      title: "Second Blog Post",
      date: "2024-01-10",
      excerpt: "This is a brief excerpt from your second blog post...",
    },
  ];

  return (
    <section className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="p-6 rounded-lg border hover:border-primary transition-colors cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <time className="text-sm text-muted-foreground mb-4 block">
                {post.date}
              </time>
              <p className="text-foreground/80">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;