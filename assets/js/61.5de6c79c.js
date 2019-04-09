(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{287:function(e,t,o){"use strict";o.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=o(6),n=Object(i.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[o("h1",{attrs:{id:"collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Collections")]),e._v(" "),o("blockquote",[o("p",[e._v("A Collection is a grouping of similar Items. Each collection represents a table in your database.")])]),e._v(" "),o("h2",{attrs:{id:"creating-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Collections")]),e._v(" "),o("p",[e._v("To create a collection, head over to the "),o("em",[e._v("Collections & Fields")]),e._v(" page in the "),o("em",[e._v("Admin Settings")]),e._v('. From here, click the "New" button ("+") in the top right and enter a new for your collection. This is the technical name used in the database and API. After the collection has been created you\'re taken to the settings page for this new collection. From here you can '),o("router-link",{attrs:{to:"./fields.html"}},[e._v("setup the fields")]),e._v(" and configure the collection's settings:")],1),e._v(" "),o("h3",{attrs:{id:"note"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#note","aria-hidden":"true"}},[e._v("#")]),e._v(" Note")]),e._v(" "),o("p",[e._v("The collection's note field is for internal use only. It helps your administrators understand the purpose of each collection.")]),e._v(" "),o("h3",{attrs:{id:"hidden"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hidden","aria-hidden":"true"}},[e._v("#")]),e._v(" Hidden")]),e._v(" "),o("p",[e._v("Some helper collections are not used directly (eg: junctions) and can be globally hidden. As the name implies, this will only "),o("em",[e._v("hide")]),e._v(" the collections. It doesn't restrict access to its data. In order to restrict access to this collection, you can use "),o("router-link",{attrs:{to:"./permissions.html"}},[e._v("Permissions")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"single"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#single","aria-hidden":"true"}},[e._v("#")]),e._v(" Single")]),e._v(" "),o("p",[e._v('In certain schema architectures, you may find it helpful to have a collection that can only contain one item. For example, the "About" or "Settings" of your project might be managed within the fields of a single item (also known as a "singleton"). When enabled, clicking the collection in the navigation will open the Item Detail page directly, skipping the Items Browse page.')]),e._v(" "),o("h2",{attrs:{id:"managing-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#managing-collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Managing Collections")]),e._v(" "),o("p",[e._v("Collections added through Directus are automatically managed, however collections added directly to the database are unmanaged by default. This avoids issues with dynamically created temporary tables or any tables outside the scope of your project. Directus completely ignores any unmanaged collections.")]),e._v(" "),o("h2",{attrs:{id:"deleting-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deleting-collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Deleting Collections")]),e._v(" "),o("p",[e._v('To destroy a collection and all of its data you can click the Delete Button ("×") in the header of the collection detail page. You will be asked only once to confirm this permanent action.')]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("It is possible to irreverisbly delete massive amounts of data with this feature. Proceed with extreme caution.")])])])},[],!1,null,null,null);n.options.__file="collections.md";t.default=n.exports}}]);