const { openBrowser, goto, click, text, closeBrowser, waitFor } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("flowing.it");
        await click("lavora con noi");
        await text("UX").exists();
        await text("cloud").exists();
        await text("front-end").exists();
        await text("back-end").exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();