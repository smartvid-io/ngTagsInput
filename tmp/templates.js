/* HTML templates */
tagsInput.run(function($templateCache) {
  'use strict';

  $templateCache.put('ngTagsInput/tags-input.html',
    "<div class=\"host\" tabindex=\"-1\" ng-click=\"eventHandlers.host.click()\" ti-transclude-append><div class=\"host-container\"><div class=\"tags\" ng-class=\"{focused: hasFocus}\"><ul class=\"tag-list\"><li class=\"tag-item\" ng-repeat=\"tag in tagList.items track by track(tag)\" ng-class=\"{ selected: tag == tagList.selected }\" ng-click=\"eventHandlers.tag.click(tag)\"><ti-tag-item data=\"::tag\"></ti-tag-item></li></ul><input class=\"input\" autocomplete=\"off\" ng-model=\"newTag.text\" ng-model-options=\"{getterSetter: true}\" ng-keydown=\"eventHandlers.input.keydown($event)\" ng-focus=\"eventHandlers.input.focus($event)\" ng-blur=\"eventHandlers.input.blur($event)\" ng-paste=\"eventHandlers.input.paste($event)\" ng-trim=\"false\" ng-class=\"{'invalid-tag': newTag.invalid}\" ng-disabled=\"disabled\" ng-attr-placeholder=\"{{placeholderCopy}}\" ti-bind-attrs=\"{type: options.type, tabindex: options.tabindex, spellcheck: options.spellcheck}\" ti-autosize></div></div></div>"
  );


  $templateCache.put('ngTagsInput/tag-item.html',
    "<span ng-bind=\"$getDisplayText()\"></span> <a class=\"remove-button\" ng-click=\"$removeTag()\" ng-bind=\"::$$removeTagSymbol\"></a>"
  );


  $templateCache.put('ngTagsInput/auto-complete.html',
    "<div class=\"autocomplete\" ng-if=\"suggestionList.visible\"><ul class=\"suggestion-list\"><li class=\"suggestion-item\" ng-repeat=\"item in suggestionList.items track by track(item)\" ng-class=\"{selected: item == suggestionList.selected}\" ng-click=\"addSuggestionByIndex($index)\" ng-mouseenter=\"suggestionList.select($index)\"><ti-autocomplete-match data=\"::item\"></ti-autocomplete-match></li></ul></div><div class=\"autocomplete notice\" ng-if=\"($parent.hasFocus && (showHelp || suggestionList.showNoResultsMessage) && !suggestionList.visible)\"><ul class=\"suggestion-list\"><li class=\"suggestion-item\">Press the Enter or Return key to search.</li></ul></div>"
  );


  $templateCache.put('ngTagsInput/auto-complete-match.html',
    "<span ng-bind-html=\"$highlight($getDisplayText())\"></span>"
  );
});
