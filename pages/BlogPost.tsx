import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Mock data - in a real app, fetch based on ID
    const article = {
        title: "The Art of Layering: Transitioning Through Seasons",
        category: "Style",
        date: "Oct 12, 2025",
        author: "Sarah Jenkins, Fashion Editor",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1549754755-bd1b6e985a16?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: `
            <p class="drop-cap">A</p>s the crisp autumn air begins to settle in, the challenge of maintaining both elegance and warmth becomes a daily consideration for the modest dresser. Layering is not merely a practical necessity; it is an art form that adds depth, texture, and dimension to your silhouette. At Karima, we believe that the changing seasons offer a renewed opportunity to experiment with fabrics that breathe and drape with sophistication.
            
            <h3>Understanding Fabrics</h3>
            <p>The foundation of any successful layered outfit lies in the choice of materials. Start with a lightweight base, such as our signature Medina Silk or a fine cotton blend. These breathable fabrics ensure comfort against the skin while providing a canvas for heavier textures. <br/><br/> For the mid-layer, consider structured pieces like a tailored vest or a lightweight open abaya. This adds visual interest without overwhelming the frame. Finally, your outer layer—be it a wool trench or a heavy crepe kimono—should act as the statement piece that ties the entire look together.</p>

            <block-quote>"Modesty in fashion is about the intentional concealment that reveals a woman’s dignity."</block-quote>

            <h3>The Palette of the Season</h3>
            <p>While autumn often calls for deep, earthy tones—think burnt siennas, olive greens, and rich chocolates—don’t be afraid to introduce unexpected pops of color. A soft lilac scarf or a dusty rose inner dress can bring a surprising freshness to a look dominated by neutrals.</p>

            <p>When curating your seasonal wardrobe, focus on versatility. Pieces that can be worn open or closed, belted or loose, offer the flexibility needed for fluctuating temperatures. Remember, the goal is not to hide the body under bulk, but to create a harmonious composition of lengths and textures that honors your personal style.</p>
        `
    };

    return (
        <div className="min-h-screen bg-white relative">
            {/* Top Navigation Bar for Reading Mode */}
            <div className="pt-40 md:pt-52 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <Link to="/blog" className="inline-flex items-center gap-3 text-karima-ink/60 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Journal</span>
                    </Link>
                </div>
                <article className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] text-karima-gold mb-6">
                            <span>{article.category}</span>
                            <span className="w-px h-3 bg-karima-gold/50"></span>
                            <span>{article.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-karima-brand italic leading-tight mb-8">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-xxs uppercase tracking-widest text-karima-ink/40">
                            <span>By {article.author}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] w-full overflow-hidden mb-16">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-serif prose-headings:text-karima-brand prose-headings:font-normal prose-p:text-karima-ink/70 prose-p:font-light prose-p:leading-loose prose-a:text-karima-gold hover:prose-a:text-karima-brand max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: article.content.replace('block-quote', 'blockquote class="border-l-2 border-karima-gold pl-6 py-2 my-8 text-2xl font-serif italic text-karima-brand/80"').replace('drop-cap', 'float-left text-7xl font-serif text-karima-brand leading-[0.8] mr-3 mt-[-4px]') }} />
                    </div>

                    {/* Footer / Share */}
                    <div className="mt-20 pt-12 border-t border-karima-brand/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-xs uppercase tracking-widest text-karima-ink/40">
                            Share this article
                        </div>
                        <div className="flex gap-6">
                            <button className="text-karima-brand hover:scale-110 transition-transform"><Facebook size={20} strokeWidth={1} /></button>
                            <button className="text-karima-brand hover:scale-110 transition-transform"><Twitter size={20} strokeWidth={1} /></button>
                            <button className="text-karima-brand hover:scale-110 transition-transform"><Linkedin size={20} strokeWidth={1} /></button>
                        </div>
                    </div>
                </article>
            </div>

            {/* Read Next Section */}
            <div className="bg-stone-50 py-24 border-t border-karima-brand/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-3xl font-serif text-karima-brand italic mb-12">Continue Reading</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                category: 'Wellness',
                                title: 'Morning Rituals for the Modern Muslimah',
                                image: 'https://images.unsplash.com/photo-1600325373770-9d7a147711af?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                category: 'Travel',
                                title: 'A Weekend in Cordoba',
                                image: 'https://plus.unsplash.com/premium_photo-1726812096836-6e01fe15afe7?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                category: 'Culture',
                                title: 'The Significance of Scent',
                                image: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=800&auto=format&fit=crop'
                            }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-200">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <span className="text-xs uppercase tracking-widest text-karima-gold mb-2 block">{item.category}</span>
                                <h4 className="text-xl font-serif text-karima-brand">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
