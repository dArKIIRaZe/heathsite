 var actualCaretPositionBookmark;
 
function setWysiwygValue(id, value) {
    tinymce.get(id).setContent(value);
}
function getWysiwygValue(id) {
    return tinyMCE.get(id).getContent();
}
function getWysiwygValuePlainText(id) {
    return tinyMCE.get(id).getContent({ format: 'text' });
}
function insertIntoWysiwyg(value, id) {
    if(actualCaretPositionBookmark != undefined) tinyMCE.activeEditor.selection.moveToBookmark(actualCaretPositionBookmark);
//        console.log(tinyMCE.activeEditor);
//        //tinyMCE.setActive(id);
//        tinyMCE.activeEditor.id = id;
//        console.log(tinyMCE.activeEditor.id);
//        tinyMCE.execCommand('mceFocus',false,'#'+id);
    tinyMCE.activeEditor.execCommand('mceInsertContent', false, ' ' + value + ' ');
}
function setUpTextEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

    var plugins = [
        "linkfrontend spellchecker link image external responsivefilemanager jbimages custom email phone sb_url"
    ];

    var menubar = false;
    var height = "400px";
    if($('#'+id).data('tinymce-height') != undefined) {
        height = $('#'+id).data('tinymce-height');
    }
    toolbarOptions = "   link | styleselect |  bold italic underline bullist numlist | spellchecker | removeformat  ";
    if($('#'+id).siblings('div.mce-tinymce').length == 0) {

        var settings = {
            branding: false,
            selector: '#' + id,
            width: "auto",
            height: height,
            statusbar: true,
            resize: "both",
            theme: "modern",
            valid_elements: "*[*]",
            extended_valid_elements: "*[*]",
            valid_children : "multiline[a],singleline[a]",
            plugins: plugins,
            menubar: menubar,
            cleanup: false,
            verify_html: false,
            toolbar: toolbarOptions,
            image_advtab: true,
            contextmenu: "link image inserttable | cell row column deletetable",
            external_filemanager_path: "/{{ _assetUrl }}theme/_admin/bluetree/js/tinymce/js/filemanager/",
            filemanager_title: "File Manager",
            external_plugins: {"filemanager": "{{ _assetUrl }}theme/_admin/bluetree/js/tinymce/js/filemanager/plugin.js"},
            image_list: [],
            paste_preprocess: function (plugin, args) {

                args.content += '';
            },
            setup: function (editor) {
                editor.on("keyup", function (editor, e) {
                    actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                });
                editor.on("click", function (editor, e) {
                    actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                });
                editor.on('getContent', function (e) {

                    if (e.content.indexOf("<a") >= 0) {
                        var data = e.content;
                        var hrefArr = [];
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                var text = $(this).text();
                                e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                            }
                        });
                        e.content = e.content.replace(/\<a type="page"/g, '<lotelink type="page"');
                        e.content = e.content.replace(/\<a type="file"/g, '<lotelink type="file"');
                        var data = e.content;
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                var text = $(this).attr('href');
                                e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                            }
                        });
                        var data = e.content;
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                            }
                        });
                    }
                });
                editor.on('paste', function (e) {
                    var paste;
                    if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                        paste = e.clipboardData.getData('text/plain');
                    }

                    if (e.clipboardData.types.indexOf('text/html') >= 0) {
                        var tempPaste = e.clipboardData.getData('text/html');
                        if (tempPaste.includes('<!--StartFragment-->')) { // check if the content is a special type such as actual html, image or file
                        var regex = new RegExp("([^]*<!--StartFragment-->)|(<!--EndFragment-->[^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                        paste = tempPaste.replace(regex, '');
                    }
                }

                if (paste !== undefined) {
                    paste = paste.replace(/<script[^]*<\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\script>)
                    e.preventDefault();
                    insertIntoWysiwyg(paste);
                }
            });
        editor.on('paste_preprocess', function (e) {
            console.log('paste_preprocess', e.content);
        });
        editor.on('beforeSetContent', function (e) {
            e.content = e.content.replace(/<p>(<a[^<]*(<img[^<]*)<\/a>)<\/p>/gi, function (a) {
                return a.replace('<p>', '').replace('</p>', '');
            });
            if (e.content.indexOf("<lotelink") >= 0) {

                var data = e.content;
                $(data).find("lotelink").each(function () {
                    var attr = $(this).attr('lote_id');
                    if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                        var text = $(this).attr('href');
                        e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                    }

                });

                var data = e.content;
                $(data).find("lotelink").each(function () {
                    var attr = $(this).attr('lote_id');
                    if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                        e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                    }

                });

                e.content = e.content.replace(/\<lotelink type="img"/g, '<img');
                e.content = e.content.replace(/\<lotelink type="page"/g, '<a type="page"');
                e.content = e.content.replace(/\<lotelink type="file"/g, '<a type="file"');
                e.content = e.content.replace(/\<\/lotelink>/g, '</a>');

            }

        });
    },
    spellchecker_language: "en_GB",
            spellchecker_rpc_url: 'spellchecker.php',
            link_formats: ["Link To URL", "Link To Email", "Link To Phone"],
            is_campaign: (profile !== undefined && profile === "campaign"),
            sz_profile: profile
};

if(typeof(toolbar) != 'undefined') {
    settings.toolbar1 = toolbar1Custom;
}

//Add CSS includes if provided
if(cssIncludes) {
    settings.content_css = cssIncludes;
}

//If newsletter editor...
if(isNewsletter) {
    settings.width = "800px";
    settings.resize = true;
}

if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
    settings.relative_urls = false;
    settings.convert_urls = false;
}

tinymce.init(settings);
}
}

function setUpTextEditorFrontEnd(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls) {

    var plugins = [
        "sb_links paste spellchecker textcolor sb_images sb_filemanager sb_table lists"
    ];

    var menubar = false;
    var height = "400px";
    if($('#'+id).data('tinymce-height') != undefined) {
        height = $('#'+id).data('tinymce-height');
    }
    toolbarOptions = "sb_links | sb_images | table |styleselect |  fontsizeselect forecolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat  ";
    if($('#'+id).siblings('div.mce-tinymce').length == 0) {

        var settings = {
            branding: false,
            selector: '#' + id,
            width: "auto",
            height: height,
            statusbar: true,
            paste_auto_cleanup_on_paste : true,
            paste_remove_styles: true,
            paste_remove_styles_if_webkit: true,
            paste_strip_class_attributes: true,
            resize: "both",
            theme: "modern",
            valid_elements: "*[*]",
            extended_valid_elements: "*[*]",
            valid_children : "multiline[a],singleline[a]",
            plugins: plugins,
            menubar: menubar,
            cleanup: false,
            verify_html: false,
            toolbar: toolbarOptions,
            image_advtab: true,
            contextmenu: "link image inserttable | cell row column deletetable",
            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 36px",
            image_list: [],
            paste_preprocess: function (plugin, args) {
                args.content += '';
            },
            setup: function (editor) {
                editor.on("keyup", function (editor, e) {
                    actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                });
                editor.on("click", function (editor, e) {
                    actualCaretPositionBookmark = tinyMCE.activeEditor.selection.getBookmark(2, true);
                });
                editor.on('getContent', function (e) {

                    if (e.content.indexOf("<a") >= 0) {
                        var data = e.content;
                        var hrefArr = [];
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                var text = $(this).text();
                                e.content = e.content.replace(text+"</a>", text+'</lotelink>');
                            }
                        });
                        e.content = e.content.replace(/\<a type="page"/g, '<lotelink type="page"');
                        e.content = e.content.replace(/\<a type="file"/g, '<lotelink type="file"');
                        var data = e.content;
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                var text = $(this).attr('href');
                                e.content = e.content.replace('<a href="'+text+'"', '<lotelink href="'+text+'"');
                            }
                        });
                        var data = e.content;
                        $(data).find("a").each(function () {
                            var attr = $(this).attr('lote_id');
                            if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                                e.content = e.content.replace('<a lote_id="'+attr+'"', '<lotelink lote_id="'+attr+'"');
                            }
                        });
                    }
                });
                editor.on('paste', function (e) {
                    var paste;
                    if (e.clipboardData.types.indexOf('text/plain') >= 0) {
                        paste = e.clipboardData.getData('text/plain');
                    }

                    if (e.clipboardData.types.indexOf('text/html') >= 0) {
                        var tempPaste = e.clipboardData.getData('text/html');
                        if (tempPaste.includes('<!--StartFragment-->')) { // check if the content is a special type such as actual html, image or file
                        var regex = new RegExp("([^]*<!--StartFragment-->)|(<!--EndFragment-->[^]*)", "g"); // tinymce copy includes full html and body tags, and the actual content is actually between the comments
                        paste = tempPaste.replace(regex, '');
                    }
                }

                if (paste !== undefined) {
                    paste = paste.replace(/<script[^]*<\/script>/g, ''); // replaces everything in-between and including (<scrip -- <\script>)
                    e.preventDefault();
                    insertIntoWysiwyg(paste);
                }
            });
        editor.on('paste_preprocess', function (e) {
            console.log('paste_preprocess', e.content);
        });
        editor.on('beforeSetContent', function (e) {

            if (e.content.indexOf("<lotelink") >= 0) {

                var data = e.content;
                $(data).find("lotelink").each(function () {
                    var attr = $(this).attr('lote_id');
                    if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                        var text = $(this).attr('href');
                        e.content = e.content.replace('<lotelink href="'+text+'"', '<a href="'+text+'"');
                    }

                });

                var data = e.content;
                $(data).find("lotelink").each(function () {
                    var attr = $(this).attr('lote_id');
                    if (typeof attr !== typeof undefined && attr !== false && $.isNumeric(attr)) {
                        e.content = e.content.replace('<lotelink lote_id="'+attr+'"', '<a lote_id="'+attr+'"');
                    }

                });

                e.content = e.content.replace(/\<lotelink type="img"/g, '<img');
                e.content = e.content.replace(/\<lotelink type="page"/g, '<a type="page"');
                e.content = e.content.replace(/\<lotelink type="file"/g, '<a type="file"');
                e.content = e.content.replace(/\<\/lotelink>/g, '</a>');

            }

        });
    },
    spellchecker_language: "en_GB",
            spellchecker_rpc_url: 'spellchecker.php',
            is_campaign: (profile !== undefined && profile === "campaign"),
            sz_profile: profile
};

if(typeof(toolbar) != 'undefined') {
    settings.toolbar1 = toolbar1Custom;
}

//Add CSS includes if provided
if(cssIncludes) {
    settings.content_css = cssIncludes;
}

//If newsletter editor...
if(isNewsletter) {
    settings.width = "800px";
    settings.resize = true;
}

if(typeof relativeUrls == 'undefined' || relativeUrls == false) {
    settings.relative_urls = false;
    settings.convert_urls = false;
}

settings.sb_links_opts = {
    link_url: true,
    link_email: true,
    link_phone: true
};

settings.sb_images_opts = {
    link_upload: true,
    link_external: true
};

tinymce.init(settings);

}
}

function setupContentEditor(id, isFullPage, toolbar1Custom, cssIncludes, isNewsletter, profile, relativeUrls, wildcards, overrideHeight) {
    var plugins = [
        "contextmenu", "advlist", "autolink", "lists", "print",  "searchreplace", "visualblocks", "visualchars",
        "code", "save", "directionality", "paste", "textcolor",
        "sb_filemanager", "sb_links", "sb_images", "sb_table", "spellchecker"
    ];
    var contextMenu = " sb_links sb_images inserttable elements web_link pdf_viewer";

    var wildcardSettings = {
        content_holder: false,
        update_forms: false
    };

    if (wildcards) {
        if (profile !== 'campaign') {
            plugins.push("sb_elements");
        }
        plugins.push("sb_wildcards");
        contextMenu = contextMenu + " sb_wildcards sb_wildcards_update_form ";

    }

    var toolbarOptions = "sb_images sb_gallery sb_video pdf_viewer sb_links | formatselect | fontsizeselect forecolor | bold italic underline strikethrough | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist  |  undo redo | code";
    if (profile === "campaign"){
        toolbarOptions = "undo redo | fontsizeselect forecolor | bold italic | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | sb_links | code";
    }
    else if(profile === "manage_app_mobile") {
        toolbarOptions = "undo redo removeformat |  bold italic | alignleft aligncenter alignright | outdent indent | sb_links | sb_images | code ";
    }
    else {
        plugins.push("sb_gallery");
        plugins.push("sb_video");
        contextMenu = "sb_images sb_gallery sb_video pdf_viewer web_link inserttable elements sb_links";
        //contextMenu =  "sb_gallery sb_video "+contextMenu;

    }


    if(isFullPage || isNewsletter) {
        plugins.push("fullpage");
    }

    var validElements = "*[*]";
    var invalidElements = "";
    var validExtendedElements = '*[*]';
    var validChildren = "multiline[a],singleline[a]";

    var menubar = "edit insert view table tools sb_wildcards";
    if(profile === "manage_app_mobile"){
        menubar = false;
    }
    var height = "600px";
    if(profile == "quick_feed" || profile == "summary" ){
        height = "400px";
    }
    else if( profile === "manage_app_mobile"){
        height = "250px";
    }
    else if( profile === "new_content_holder"){
        height = "400px";
    }
    else if(profile === "company_note"){
        height = "330px";
    }


    if (overrideHeight) {
        height = overrideHeight + "px";
    }

}