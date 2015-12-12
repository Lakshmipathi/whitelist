(function () {
Discourse.Markdown.whiteListTag('script', 'type', 'text/javascript');
Discourse.Markdown.whiteListTag('script', 'src', '*');
Discourse.Markdown.whiteListTag('script', 'id', '*');
Discourse.Markdown.whiteListTag('script', 'async'); 
Discourse.Markdown.whiteListTag('textarea');
})();
