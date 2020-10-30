 const PAGES_DIRECTORY = "/pages";
 const IMAGES_DIRECTORY = "/images";

 const CONTENT_REPLACEMENTS =
 {
    'footer':
    `
    <div class = "img" style = "background-image: Url(${IMAGES_DIRECTORY}/joinUs.png);"></div>
    <div class = "content">
        <p><a href = "${PAGES_DIRECTORY}/join.html"><i>Join Us!</i></a>
            Do you have a project you want to share?
            A framework you want to learn? A team you want to create?
            Something else? Join us! All University of Washington
            students are welcome!
        </p>
        <p>
            We have taught Flutter, SwiftUI, and even introductory Android
            development! Want to learn or teach a different platform?
            <a href = "https://discord.gg/ZyDM5Br">Let us know.</a>
        </p>
    </div>
    `,

    'header':
    `
        <a href = "${PAGES_DIRECTORY}/about.html">About</a>
        <a href = "${PAGES_DIRECTORY}/support.html">Support Us</a>
        <a href = "${PAGES_DIRECTORY}/join.html">Join Us</a>
    `,
};

/**
 *  replaceSelectors replaces all selectors provided in CONTENT_REPLACEMENTS
 * with their content, as defined in CONTENT_REPLACEMENTS. replaceSelectors
 * is async, allowing calling code to push itself to the next animation frame
 * for further DOM manipulations.
 */
async function replaceSelectors()
{
    for (const selector in CONTENT_REPLACEMENTS)
    {
        const elements = document.querySelectorAll(selector);

        for (const element of elements)
        {
            element.innerHTML = CONTENT_REPLACEMENTS[selector];
        }
    }
}

export { replaceSelectors };