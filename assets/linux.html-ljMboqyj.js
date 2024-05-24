import{_ as a,c as t,e as n,a as e,f as s,o as i}from"./app-DTdSGIG-.js";const r={},l=e("h1",{id:"linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux"},[e("span",null,"Linux")])],-1),o=s(`<h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h2><p>查看开放的端口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> firewall-cmd --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看端口状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> firewall-cmd --query-port<span class="token operator">=</span><span class="token number">6666</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加端口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> firewall-cmd --add-port<span class="token operator">=</span><span class="token number">6666</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新加载</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除端口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">6666</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function d(c,p){return i(),t("div",null,[l,n(" more "),o])}const u=a(r,[["render",d],["__file","linux.html.vue"]]),h=JSON.parse('{"path":"/tutorial/linux.html","title":"Linux","lang":"zh-CN","frontmatter":{"title":"Linux","date":"2022-05-08T22:34:12.000Z","category":["教程"],"order":2,"head":[["meta",{"property":"og:url","content":"https://wome.ng/tutorial/linux.html"}],["meta",{"property":"og:site_name","content":"我梦的笔记本"}],["meta",{"property":"og:title","content":"Linux"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T16:16:56.000Z"}],["meta",{"property":"article:author","content":"我梦"}],["meta",{"property":"article:published_time","content":"2022-05-08T22:34:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-24T16:16:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-08T22:34:12.000Z\\",\\"dateModified\\":\\"2024-05-24T16:16:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我梦\\",\\"url\\":\\"https://wome.ng\\"}]}"]]},"headers":[{"level":2,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]}],"git":{"createdTime":1716567416000,"updatedTime":1716567416000,"contributors":[{"name":"Foobar","email":"github@foobar.com","commits":1}]},"readingTime":{"minutes":0.26,"words":78},"filePathRelative":"tutorial/linux.md","localizedDate":"2022年5月8日","excerpt":"\\n"}');export{u as comp,h as data};
