import{_ as i,c as n,e as t,a as e,f as l,o as s}from"./app-Cl6eEdYf.js";const a="/assets/images/tutorial/rclone/01.png",r="/assets/images/tutorial/rclone/02.png",o="/assets/images/tutorial/rclone/03.png",d="/assets/images/tutorial/rclone/04.png",c="/assets/images/tutorial/rclone/05.png",v="/assets/images/tutorial/rclone/06.png",u="/assets/images/tutorial/rclone/07.png",g="/assets/images/tutorial/rclone/08.png",m="/assets/images/tutorial/rclone/09.png",b="/assets/images/tutorial/rclone/10.png",p="/assets/images/tutorial/rclone/11.png",h="/assets/images/tutorial/rclone/12.png",f="/assets/images/tutorial/rclone/13.png",x="/assets/images/tutorial/rclone/14.png",y={},_=e("h1",{id:"rclone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rclone"},[e("span",null,"Rclone")])],-1),w=l(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>Linux/macOS/BSD</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-v</span> <span class="token punctuation">;</span> <span class="token function">curl</span> https://rclone.org/install.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-client-id-和-client-secret" tabindex="-1"><a class="header-anchor" href="#创建-client-id-和-client-secret"><span>创建 Client ID 和 Client Secret</span></a></h2><p>打开 <a href="https://console.developers.google.com" target="_blank" rel="noopener noreferrer">Google API Console</a> ，选择一个项目或者创建一个新项目</p><ol><li>点击 <code>启用 API 和服务</code></li></ol><figure><img src="`+a+'" alt="步骤1" tabindex="0" loading="lazy"><figcaption>步骤1</figcaption></figure><ol start="2"><li>找到 <code>Google Drive API</code> 并点击</li></ol><figure><img src="'+r+'" alt="步骤2" tabindex="0" loading="lazy"><figcaption>步骤2</figcaption></figure><ol start="3"><li>点击 <code>启用</code></li></ol><figure><img src="'+o+'" alt="步骤3" tabindex="0" loading="lazy"><figcaption>步骤3</figcaption></figure><ol start="4"><li>依次点击 <code>凭据</code> 和 <code>配置同意屏幕</code></li></ol><figure><img src="'+d+'" alt="步骤4" tabindex="0" loading="lazy"><figcaption>步骤4</figcaption></figure><ol start="5"><li>选择 <code>External</code> 后点击 <code>创建</code></li></ol><figure><img src="'+c+'" alt="步骤5" tabindex="0" loading="lazy"><figcaption>步骤5</figcaption></figure><ol start="6"><li>输入 <code>应用名称</code> 和 <code>用户支持电子邮件</code></li></ol><figure><img src="'+v+'" alt="步骤6" tabindex="0" loading="lazy"><figcaption>步骤6</figcaption></figure><ol start="7"><li>输入 <code>电子邮件地址</code> 后点击 <code>保存并继续</code> ，然后再次点击 <code>保存并继续</code></li></ol><figure><img src="'+u+'" alt="步骤7" tabindex="0" loading="lazy"><figcaption>步骤7</figcaption></figure><ol start="8"><li>点击 <code>ADD USERS</code> 后输入自己的账号，然后点击 <code>添加</code> ，再点击 <code>保存并继续</code></li></ol><figure><img src="'+g+'" alt="步骤8" tabindex="0" loading="lazy"><figcaption>步骤8</figcaption></figure><ol start="9"><li>依次点击 <code>凭据</code> 、 <code>创建凭据</code> 和 <code>OAuth 客户端 ID</code></li></ol><figure><img src="'+m+'" alt="步骤9" tabindex="0" loading="lazy"><figcaption>步骤9</figcaption></figure><ol start="10"><li><code>应用类型</code> 选择 <code>桌面应用</code> ，输入 <code>名称</code> 后点击 <code>创建</code></li></ol><figure><img src="'+b+'" alt="步骤10" tabindex="0" loading="lazy"><figcaption>步骤10</figcaption></figure><ol start="11"><li>记下 <code>客户端 ID</code> 和 <code>客户端密钥</code></li></ol><figure><img src="'+p+'" alt="步骤11" tabindex="0" loading="lazy"><figcaption>步骤11</figcaption></figure><ol start="12"><li>依次点击 <code>OAuth 权限请求页面</code> 、 <code>PUBLISH APP</code> 和 <code>确认</code></li></ol><figure><img src="'+h+`" alt="步骤12" tabindex="0" loading="lazy"><figcaption>步骤12</figcaption></figure><p><a href="https://rclone.org/drive/#making-your-own-client-id" target="_blank" rel="noopener noreferrer">官方文档</a></p><h2 id="新建远程" tabindex="-1"><a class="header-anchor" href="#新建远程"><span>新建远程</span></a></h2><ol><li>运行 <code>rclone config</code> 进入交互式配置会话后输入 <code>n</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>root@localhost:~# rclone config
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q&gt; n
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>输入名称</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Enter name for new remote.
name&gt; google-drive
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>找到 <code>Google Drive</code> 并输入对应的数字，当前为 <code>17</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
...
16 / Google Cloud Storage (this is not Google Drive)
   \\ (google cloud storage)
17 / Google Drive
   \\ (drive)
18 / Google Photos
   \\ (google photos)
...
Storage&gt; 17
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>输入前面记下的 <code>客户端 ID</code> 和 <code>客户端密钥</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Option client_id.
Google Application Client Id
Setting your own is recommended.
See https://rclone.org/drive/#making-your-own-client-id for how to create your own.
If you leave this blank, it will use an internal key which is low performance.
Enter a value. Press Enter to leave empty.
client_id&gt; 831060968648-*******************************9.apps.googleusercontent.com

Option client_secret.
OAuth Client Secret.
Leave blank normally.
Enter a value. Press Enter to leave empty.
client_secret&gt; GOCSP***************************Dxe
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>输入 <code>1</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Option scope.
Comma separated list of scopes that rclone should use when requesting access from drive.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Full access all files, excluding Application Data Folder.
   \\ (drive)
 2 / Read-only access to file metadata and file contents.
   \\ (drive.readonly)
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \\ (drive.file)
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \\ (drive.appfolder)
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \\ (drive.metadata.readonly)
scope&gt; 1
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>按 <kbd>Enter</kbd> 键跳过</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Option service_account_file.
Service Account Credentials JSON file path.
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Leading \`~\` will be expanded in the file name as will environment variables such as \`\${RCLONE_CONFIG_DIR}\`.
Enter a value. Press Enter to leave empty.
service_account_file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>输入 <code>n</code> 或者按 <kbd>Enter</kbd> 键使用默认值 <code>n</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Edit advanced config?
y) Yes
n) No (default)
y/n&gt; n
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>输入 <code>n</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Use web browser to automatically authenticate rclone with remote?
 * Say Y if the machine running rclone has a web browser you can use
 * Say N if running rclone on a (remote) machine without web browser access
If not sure try Y. If Y failed, try N.

y) Yes (default)
n) No
y/n&gt; n
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>找到高亮的部分并粘贴到本地终端运行</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Option config_token.
For this to work, you will need rclone available on a machine that has
a web browser available.
For more help and alternate methods see: https://rclone.org/remote_setup/
Execute the following on the machine with the web browser (same rclone
version recommended):
        rclone authorize &quot;drive&quot; &quot;eyJjbGll***************************************************************************************************************************************************************************************************yaXZlIn0&quot;
Then paste the result.
Enter a value.
config_token&gt;
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>在打开的浏览器页面中登录，然后依次点击 <code>高级</code> 和 <code>转至xxxxxx（不安全）</code></li></ol><figure><img src="`+f+'" alt="步骤10" tabindex="0" loading="lazy"><figcaption>步骤10</figcaption></figure><ol start="11"><li>点击 <code>继续</code></li></ol><figure><img src="'+x+`" alt="步骤11" tabindex="0" loading="lazy"><figcaption>步骤11</figcaption></figure><ol start="12"><li>出现 <code>Success!</code> 后回到本地终端，找到高亮的部分并粘贴到服务器上</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Paste the following into your remote machine ---&gt;
eyJ0b2tl************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************MFwifSJ9
&lt;---End paste
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>输入 <code>n</code> 或者按 <kbd>Enter</kbd> 键使用默认值 <code>n</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Configure this as a Shared Drive (Team Drive)?

y) Yes
n) No (default)
y/n&gt; n
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li>输入 <code>y</code> 或者按 <kbd>Enter</kbd> 键使用默认值 <code>y</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Configuration complete.
Options:
- type: drive
- client_id: 831060968648-*******************************9.apps.googleusercontent.com
- client_secret: GOCSP***************************Dxe
- scope: drive
- token: {&quot;access_token&quot;:&quot;ya29.a0A**********************************************************************************************************************************************************************************************************vkRw0171&quot;,&quot;token_type&quot;:&quot;Bearer&quot;,&quot;refresh_token&quot;:&quot;1//0gsFa***************************************************************************************nTLPIcyo&quot;,&quot;expiry&quot;:&quot;2024-06-11T09:38:00.000000+08:00&quot;}
- team_drive:
Keep this &quot;google-drive&quot; remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d&gt; y
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15"><li>输入 <code>q</code> 退出交互式配置会话</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Current remotes:

Name                 Type
====                 ====
google-drive         drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q&gt; q
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function k(q,S){return s(),n("div",null,[_,t(" more "),w])}const D=i(y,[["render",k],["__file","rclone.html.vue"]]),E=JSON.parse('{"path":"/tutorial/rclone.html","title":"Rclone","lang":"zh-CN","frontmatter":{"title":"Rclone","date":"2024-06-11T09:38:00.000Z","category":["教程"],"order":4,"head":[["meta",{"property":"og:url","content":"https://wome.ng/tutorial/rclone.html"}],["meta",{"property":"og:site_name","content":"我梦的笔记本"}],["meta",{"property":"og:title","content":"Rclone"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wome.ng/assets/images/tutorial/rclone/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T09:12:57.000Z"}],["meta",{"property":"article:author","content":"我梦"}],["meta",{"property":"article:published_time","content":"2024-06-11T09:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-10T09:12:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rclone\\",\\"image\\":[\\"https://wome.ng/assets/images/tutorial/rclone/01.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/02.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/03.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/04.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/05.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/06.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/07.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/08.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/09.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/10.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/11.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/12.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/13.png\\",\\"https://wome.ng/assets/images/tutorial/rclone/14.png\\"],\\"datePublished\\":\\"2024-06-11T09:38:00.000Z\\",\\"dateModified\\":\\"2024-07-10T09:12:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我梦\\",\\"url\\":\\"https://wome.ng\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"创建 Client ID 和 Client Secret","slug":"创建-client-id-和-client-secret","link":"#创建-client-id-和-client-secret","children":[]},{"level":2,"title":"新建远程","slug":"新建远程","link":"#新建远程","children":[]}],"git":{"createdTime":1720602777000,"updatedTime":1720602777000,"contributors":[{"name":"Foobar","email":"github@foobar.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"tutorial/rclone.md","localizedDate":"2024年6月11日","excerpt":"\\n"}');export{D as comp,E as data};
