export const content = () => (
    <>
        <h3 id="intro">Introduction:</h3>
        <p><b><a href="https://wordpress.org/plugins/wp-extended-search/" rel="nofollow noreferrer" target="_blank">WP Extended Search</a></b> is a lightweight search plugin for WordPress. It offers smooth and simple search settings to modify the default WordPress search query.<br />< br />
            A key feature of the plugin is its ability to select meta keys, tags, categories, and custom taxonomies. This allows site's admin to choose single or multiple meta keys and taxonomies to include in the search query. For instance, if an administrator wants to include a meta key like <strong>Location</strong> with terms such as <em>loc1</em>, <em>loc2</em>, and <em>loc3</em>, they can select only this meta key to include in the search results. If a user then searches for <em>loc1</em>, the posts related to <em>loc1</em> will appear on search results.<br />
        </p>

        <h3 id="install">Installation:</h3>
        <p>Install WP Extended Search from the 'Plugins' section in your dashboard (Plugins &gt; Add New &gt; Search for 'WP Extended Search').</p>
        <p>Or</p>
        <p>Download WP Extended Search from <a href="https://wordpress.org/plugins/wp-extended-search/" rel="nofollow">here</a> and upload it to your webserver via your FTP application. The WordPress codex contains <a href="https://wordpress.org/support/article/managing-plugins/#installing-plugins" rel="nofollow">instructions on how to do this here</a>.</p>
        <p>Activate the plugin and navigate to (Settings &gt; Extended Search) to choose your desired search settings.</p>

        <h3 id="keyinfo">Kay Information:</h3>
        <ul>
            <li>By default, the plugin has WordPress default settings. You need to change the settings according to your requirements. You can also revert the settings to default by clicking "Reset to WP default".</li>
            <li>Settings have an OR relation with each other. For instance, if a user searches for "hello world", then both words or any word (You can customize this relation since version 1.1) should be present in the title, content, tag, category, etc., whichever options are selected.</li>
            <li>The plugin does not affect search results in admin screens.</li>
            <li>Meta keys starting with an underscore (_) are not selectable, as these are default WordPress meta keys typically without human-readable values.</li>
            <li>Only those post types and taxonomies are available to select which have a UI and public visibility.</li>
            <li>
                Global search setting alters the main search query and all secondary WP queries on the front-end and Ajax requests. 
                It does not alter the REST request. To enable REST support, you need to pass <code>wpessid</code> with request.
                See this <a href="https://wordpress.org/support/topic/search-queries-with-metakey-name-issue-version-2-0-2/#post-14376988" rel="nofollow">post</a> for more details.
            </li>
        </ul>
    </>
);

export const jumpLinks = {
    'intro': 'Introduction',
    'install': 'Installation',
    'keyinfo': 'Kay Information'
};