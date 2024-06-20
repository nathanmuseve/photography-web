import "./Blogs.css"
import Contacts from "./Contacts";
function Blogs() {
    return (
        <div className="blogs">
            <h2>Blogs</h2>
            <p>Here are some of my blogs:</p>

            <div id="content">
                <h2>Incredible Photography Techniques and Photo Tutorials</h2>
                <p>Over the recent months we’ve been presenting various showcases of photography – while many readers hated the showcases, most readers found them inspirational and perfect for a lousy workday’s morning. However, what we should have done in the inspirational posts is not just provide you with some inspiration for your work, but also present useful photographic techniques which can help you to achieve optimal pictures for your designs. And as requested by many of you, now it’s time to correct our mistake.</p>
                <aside>
                   <img src={require("./../images1/manager.jpg")} alt="deco" />
                   <h3>About the author</h3>
                   <p><b>Nathan</b> loves moving forwward without giving up easily or giving in to the wrong ideas from peers</p>
                </aside>
                <p>In this post we present useful photographic techniques, tutorials and resources for various kinds of photography. You’ll learn how to set up the perfect environment and what techniques, principles and rules of thumbs you should consider when shooting your next perfect photo. This round-up isn’t supposed to be the ultimate one please feel free to suggest more useful articles in the comments to this post.</p>
                <p>Among other things, we cover high-speed photography, tilt-shift photography, black and white photography, motion blur, infrared, night, smoke photography, macro photography, HDR, panoramic photography, RAW processing and others. Hopefully, you’ll find many of the listed tutorials and how-tos useful for your regular work.</p>
            </div>
            
            <div>
                <h2>The tutorials</h2>
                <p>There are seven basic elements of photographic art: <b>line</b>, <b>shape</b>, <b>form</b>, <b>texture</b>, <b>color</b>, <b>size</b>, and <b>depth</b>. As a photographic artist, your knowledge and awareness of these different elements can be vital to the success of your composition and help convey the meaning of your photograph.</p>
            </div>

            <div>
                <h2>What are the 8 rules of photography?</h2>
                <p>Rule of Thirds.</p>
                <p>Leading Lines.</p>
                <p>Balancing Elements.</p>
                <p>Golden Spiral.</p>
                <p>Reflections.</p>
                <p>Frame within a Frame.</p>
                <p>Patterns.</p>
                <p>Cropping.</p>
            </div>

            <div>
                <h2>What are the 3 most important principles in photography?</h2>
                <p>Understand the exposure triangle. The exposure triangle simply refers to the three most important elements of exposure; ISO, aperture and shutter speed.</p>
            </div>
            <Contacts />
        </div>
    );  
}
export default Blogs;