"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7620],{84535:(S,P,t)=>{t.r(P),t.d(P,{PlaylistEditPage:()=>v,default:()=>O});var e=t(96540),E=t(16817),C=t(12131),c=t(67608),p=t(8484),D=t(23833),T=t(86022);const v=({match:I})=>{const A=(0,T.NF)(),l=(0,E.A)(()=>A.getPlaylist(I.params.uid),[I.params]),M=async g=>{await A.updatePlaylist(g),C.Ny.push("/playlists")},f={text:(0,p.t)("playlist-edit.title","Edit playlist"),subTitle:(0,p.t)("playlist-edit.sub-title","A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors.")};return e.createElement(c.Y,{navId:"dashboards/playlists",pageNav:f},e.createElement(c.Y.Contents,{isLoading:l.loading},l.error&&e.createElement("div",null,e.createElement(p.x6,{i18nKey:"playlist-edit.error-prefix"},"Error loading playlist:"),JSON.stringify(l.error)),l.value&&e.createElement(D.$,{onSubmit:M,playlist:l.value})))},O=v},23833:(S,P,t)=>{t.d(P,{$:()=>J});var e=t(96540),E=t(13544),C=t(32264),c=t(88575),p=t(10354),D=t(84167),T=t(67061),v=t(55852),O=t(72235),I=t(59429),A=t(99818),l=t(8484),M=t(24439),f=t(75494),g=t(32196),$=t(55127),F=t.n($),K=t(40845),N=t(62930),B=t(14578),R=t(29158),U=t(46334);const L=({items:d,onDelete:n})=>{const i=(0,K.of)(W);if(!d?.length)return e.createElement("div",null,e.createElement("em",null,e.createElement(l.x6,{i18nKey:"playlist-edit.form.table-empty"},"Playlist is empty. Add dashboards below.")));const y=a=>{let m=a.type==="dashboard_by_tag"?"apps":"tag-alt";const r=[],s=a.dashboards?.[0];return a.dashboards?a.type==="dashboard_by_tag"?(r.push(e.createElement(U.E,{key:a.value,label:a.value,removeIcon:!1,count:0})),s?r.push(e.createElement("span",{key:"info"},"\xA0 ",F()("dashboard",a.dashboards.length,!0))):(m="exclamation-triangle",r.push(e.createElement("span",{key:"info"},"\xA0 No dashboards found")))):s?r.push(a.dashboards.length>1?e.createElement("span",{key:"info"},"Multiple items found: $",a.value):e.createElement("span",{key:"info"},s.name??a.value)):(m="exclamation-triangle",r.push(e.createElement("span",{key:"info"},"\xA0 Not found: ",a.value))):r.push(e.createElement(N.y,{key:"spinner"})),e.createElement(e.Fragment,null,e.createElement(B.I,{name:m,className:i.rightMargin,key:"icon"}),r)};return e.createElement(e.Fragment,null,d.map((a,m)=>e.createElement(f.sx,{key:`${m}/${a.value}`,draggableId:`${m}`,index:m},r=>e.createElement("div",{className:i.row,ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,role:"row"},e.createElement("div",{className:i.actions,role:"cell","aria-label":`Playlist item, ${a.type}, ${a.value}`},y(a)),e.createElement("div",{className:i.actions},e.createElement(R.K,{name:"times",size:"md",onClick:()=>n(m),"data-testid":E.Tp.pages.PlaylistForm.itemDelete,tooltip:(0,l.t)("playlist-edit.form.table-delete","Delete playlist item")}),e.createElement(B.I,{title:(0,l.t)("playlist-edit.form.table-drag","Drag and drop to reorder"),name:"draggabledots",size:"md"}))))))};function W(d){return{row:(0,g.css)`
      padding: 6px;
      background: ${d.colors.background.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3px;

      border: 1px solid ${d.colors.border.medium};
      &:hover {
        border: 1px solid ${d.colors.border.strong};
      }
    `,rightMargin:(0,g.css)`
      margin-right: 5px;
    `,actions:(0,g.css)`
      align-items: center;
      justify-content: center;
      display: flex;
    `,settings:(0,g.css)`
      label: settings;
      text-align: right;
    `}}const z=({items:d,deleteItem:n,moveItem:i})=>{const y=a=>{a.destination&&i(a.source.index,a.destination?.index)};return e.createElement(D.n,{label:(0,l.t)("playlist-edit.form.table-heading","Dashboards")},e.createElement(f.JY,{onDragEnd:y},e.createElement(f.gL,{droppableId:"playlist-list",direction:"vertical"},a=>e.createElement("div",{ref:a.innerRef,...a.droppableProps},e.createElement(L,{items:d,onDelete:n}),a.placeholder))))};var j=t(16817),Y=t(86022);function V(d){const[n,i]=(0,e.useState)(d??[]);(0,j.A)(async()=>{for(const s of n)if(!s.dashboards){i(await(0,Y.qY)(n));return}},[n]);const y=(0,e.useCallback)(s=>{s&&i([...n,{type:"dashboard_by_uid",value:s.uid}])},[n]),a=(0,e.useCallback)(s=>{const o=s[0];if(!o||n.find(h=>h.value===o))return;const u={type:"dashboard_by_tag",value:o};i([...n,u])},[n]),m=(0,e.useCallback)((s,o)=>{if(s===o||!n[s])return;const u=Array.from(n),[h]=u.splice(s,1);u.splice(o,0,h),i(u)},[n]),r=(0,e.useCallback)(s=>{const o=n.slice();o.splice(s,1),i(o)},[n]);return{items:n,addByUID:y,addByTag:a,deleteItem:r,moveItem:m}}const J=({onSubmit:d,playlist:n})=>{const[i,y]=(0,e.useState)(!1),{name:a,interval:m,items:r}=n,s=(0,e.useMemo)(()=>()=>(0,M.getGrafanaSearcher)().tags({kind:["dashboard"]}),[]),{items:o,addByUID:u,addByTag:h,deleteItem:G,moveItem:H}=V(r),X=x=>{y(!0),d({...x,items:o,uid:n.uid})};return e.createElement(O.l,{onSubmit:X,validateOn:"onBlur"},({register:x,errors:b})=>{const Q=o.length===0||Object.keys(b).length>0;return e.createElement(e.Fragment,null,e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.name-label","Name"),invalid:!!b.name,error:b?.name?.message},e.createElement(p.p,{type:"text",...x("name",{required:(0,l.t)("playlist-edit.form.name-required","Name is required")}),placeholder:(0,l.t)("playlist-edit.form.name-placeholder","Name"),defaultValue:a,"aria-label":E.Tp.pages.PlaylistForm.name})),e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.interval-label","Interval"),invalid:!!b.interval,error:b?.interval?.message},e.createElement(p.p,{type:"text",...x("interval",{required:(0,l.t)("playlist-edit.form.interval-required","Interval is required")}),placeholder:(0,l.t)("playlist-edit.form.interval-placeholder","5m"),defaultValue:m??"5m","aria-label":E.Tp.pages.PlaylistForm.interval})),e.createElement(z,{items:o,deleteItem:G,moveItem:H}),e.createElement(D.n,{label:(0,l.t)("playlist-edit.form.heading","Add dashboards")},e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.add-title-label","Add by title")},e.createElement(I.b,{id:"dashboard-picker",onChange:u,key:o.length})),e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.add-tag-label","Add by tag")},e.createElement(A.$,{isClearable:!0,tags:[],hideValues:!0,tagOptions:s,onChange:h,placeholder:(0,l.t)("playlist-edit.form.add-tag-placeholder","Select a tag")}))),e.createElement(T.B,null,e.createElement(v.$n,{type:"submit",variant:"primary",disabled:Q,icon:i?"spinner":void 0},e.createElement(l.x6,{i18nKey:"playlist-edit.form.save"},"Save")),e.createElement(v.z9,{variant:"secondary",href:`${C.$.appSubUrl}/playlists`},e.createElement(l.x6,{i18nKey:"playlist-edit.form.cancel"},"Cancel"))))})}}}]);

//# sourceMappingURL=PlaylistEditPage.64022f9a1b894000d120.js.map