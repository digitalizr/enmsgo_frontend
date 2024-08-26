"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[152],{2471:(se,W,e)=>{e.r(W),e.d(W,{default:()=>Et});var s=e(32196),t=e(96540),p=e(70713),f=e(14110),S=e(40845),c=e(67647),g=e(67608),B=e(31678),m=e(71101),_=e(39788),o=e(8484);function b(a=!1){return a?(0,o.t)("search.search-input.include-panels-placeholder","Search for dashboards, folders, and panels"):(0,o.t)("search.search-input.placeholder","Search for dashboards and folders")}function T(){return(0,o.t)("search.dashboard-actions.new-dashboard","New dashboard")}function L(){return(0,o.t)("search.dashboard-actions.new-folder","New folder")}function O(){return(0,o.t)("search.dashboard-actions.import","Import")}function F(){return(0,o.t)("search.dashboard-actions.new","New")}var v=e(55314),P=e(32264),n=e(55852),u=e(56034),I=e(28138),w=e(28444),D=e(37690),j=e(18241),J=e(51887);function ne(){const a=(0,S.of)(A),r=(0,B.useDispatch)(),i=(0,D.xK)(),[d]=(0,v.uz)(),[l]=(0,v.wt)(),[,h]=(0,_.ET)(),C=(0,t.useMemo)(()=>!P.$.featureToggles.nestedFolders&&Object.values(i.folder).some(y=>y),[i]),E=h.hasSearchFilters(),M=()=>{r((0,D.cT)({isSelected:!1,folderUID:void 0})),E&&h.doSearchWithDebounce()},K=async()=>{await d({selectedItems:i}),U("delete",i),M()},x=async y=>{await l({selectedItems:i,destinationUID:y}),U("move",i),M()},R=()=>{I.A.publish(new w.S8({component:J.J,props:{selectedItems:i,onConfirm:x}}))},$=()=>{I.A.publish(new w.S8({component:j.T,props:{selectedItems:i,onConfirm:K}}))},z=t.createElement(n.$n,{onClick:R,variant:"secondary",disabled:C},t.createElement(o.x6,{i18nKey:"browse-dashboards.action.move-button"},"Move"));return t.createElement("div",{className:a.row,"data-testid":"manage-actions"},C?t.createElement(u.m,{content:(0,o.t)("browse-dashboards.action.cannot-move-folders","Folders cannot be moved")},z):z,t.createElement(n.$n,{onClick:$,variant:"destructive"},t.createElement(o.x6,{i18nKey:"browse-dashboards.action.delete-button"},"Delete")))}const A=a=>({row:(0,s.css)({display:"flex",flexDirection:"row",gap:a.spacing(1),marginBottom:a.spacing(2)})}),k={move:"grafana_manage_dashboards_item_moved",delete:"grafana_manage_dashboards_item_deleted"};function U(a,r){const i=Object.keys(r.dashboard).filter(l=>r.dashboard[l]),d=Object.keys(r.folder).filter(l=>r.folder[l]);(0,f.rR)(k[a],{item_counts:{folder:d.length,dashboard:i.length},source:"tree_actions"})}var Q=e(19519),Z=e(24439);function oe(){const[a,r]=(0,_.ET)();return t.createElement("div",null,t.createElement(Q.bj,{showStarredFilter:!0,state:a,getTagOptions:r.getTagOptions,getSortOptions:(0,Z.getGrafanaSearcher)().getSortOptions,sortPlaceholder:(0,Z.getGrafanaSearcher)().sortPlaceholder,includePanels:a.includePanels??!1,onLayoutChange:r.onLayoutChange,onStarredFilterChange:r.onStarredFilterChange,onSortChange:r.onSortChange,onTagFilterChange:r.onTagFilterChange,onDatasourceChange:r.onDatasourceChange,onPanelTypeChange:r.onPanelTypeChange,onSetIncludePanels:r.onSetIncludePanels}))}var re=e(69529),ce=e(72109),he=e(76442),ue=e(92955),N=(a=>(a[a.Unselected=0]="Unselected",a[a.Selected=1]="Selected",a[a.Mixed=2]="Mixed",a))(N||{}),me=e(32885),Ee=e(91793),q=e(10022),ge=e(39070),le=e(13544),fe=e(10880),ve=e(49952);function We({row:{original:a},isSelected:r,onItemSelectionChange:i}){const d=a.item;if(!r)return t.createElement(De,null);if(d.kind==="ui")return d.uiKind==="pagination-placeholder"?t.createElement(fe.S,{disabled:!0,value:!1}):t.createElement(De,null);if((0,ve.I)(d.uid))return t.createElement(De,null);const l=r(d);return t.createElement(fe.S,{"data-testid":le.Tp.pages.BrowseDashboards.table.checkbox(d.uid),"aria-label":(0,o.t)("browse-dashboards.dashboards-tree.select-checkbox","Select"),value:l===N.Selected,indeterminate:l===N.Mixed,onChange:h=>i?.(d,h.currentTarget.checked)})}function De(){const a=(0,S.of)(Fe);return t.createElement("span",{className:a.checkboxSpacer})}const Fe=a=>({checkboxSpacer:(0,s.css)({paddingLeft:a.spacing(2)})});function xe({isSelected:a,onAllSelectionChange:r}){const i=a?.("$all")??N.Unselected;return t.createElement(fe.S,{value:i===N.Selected,indeterminate:i===N.Mixed,"aria-label":(0,o.t)("browse-dashboards.dashboards-tree.select-all-header-checkbox","Select all"),onChange:d=>{i===N.Mixed?r?.(!1):r?.(d.currentTarget.checked)}})}var we=e(70255),be=e(94753),Ne=e(29158),$e=e(62930),Oe=e(14578),Ve=e(50720),Te=e(78318),ze=e(40957),Ie=e(18759);const Pe="md",Ae="sm";function He({row:{original:a},onFolderClick:r,treeID:i}){const d=(0,S.of)(Qe),{item:l,level:h,isOpen:C}=a,E=(0,D.V6)(),M=C&&!E[l.uid],K=(0,ze.cu)(a.item,C);return l.kind==="ui"?t.createElement(t.Fragment,null,t.createElement(Ie.T,{level:h,spacing:{xs:1,md:3}}),t.createElement("span",{className:d.folderButtonSpacer}),l.uiKind==="empty-folder"?t.createElement("em",{className:d.emptyText},t.createElement(be.E,{variant:"body",color:"secondary",truncate:!0},"No items")):t.createElement(we.A,{width:200})):t.createElement(t.Fragment,null,t.createElement(Ie.T,{level:h,spacing:{xs:1,md:3}}),l.kind==="folder"?t.createElement(Ne.K,{size:Pe,className:d.chevron,onClick:()=>{r(l.uid,!C)},name:C?"angle-down":"angle-right","aria-label":C?(0,o.t)("browse-dashboards.dashboards-tree.collapse-folder-button","Collapse folder {{title}}",{title:l.title}):(0,o.t)("browse-dashboards.dashboards-tree.expand-folder-button","Expand folder {{title}}",{title:l.title})}):t.createElement("span",{className:d.folderButtonSpacer}),t.createElement("div",{className:d.iconNameContainer},M?t.createElement($e.y,{size:Ae}):t.createElement(Oe.I,{size:Ae,name:K}),t.createElement(be.E,{variant:"body",truncate:!0,id:i&&(0,ve.e)(i,l)},l.url?t.createElement(Ve.N,{onClick:()=>{(0,f.rR)("manage_dashboards_result_clicked")},href:l.url,className:d.link},l.title):l.title)))}const Qe=a=>({chevron:(0,s.css)({marginRight:a.spacing(1),width:(0,Te.cs)(Pe)}),emptyText:(0,s.css)({overflow:"hidden"}),folderButtonSpacer:(0,s.css)({paddingLeft:`calc(${(0,Te.cs)(Pe)}px + ${a.spacing(1)})`}),iconNameContainer:(0,s.css)({alignItems:"center",display:"flex",gap:a.spacing(1),overflow:"hidden"}),link:(0,s.css)({"&:hover":{textDecoration:"underline"}})});var _e=e(64149);function Ge({row:{original:a}}){const r=(0,S.of)(je),i=a.item;return i.kind==="ui"?i.uiKind==="pagination-placeholder"?t.createElement(_e.L.Skeleton,null):null:i.tags?t.createElement(_e.L,{className:r.tagList,tags:i.tags}):null}function je(a){return{tagList:(0,s.css)({justifyContent:"flex-start",flexWrap:"nowrap"})}}var Ye=e(37811);const Le=36,Ce=36,Ze=0;function Je({items:a,width:r,height:i,isSelected:d,onFolderClick:l,onAllSelectionChange:h,onItemSelectionChange:C,isItemLoaded:E,requestLoadMore:M,canSelect:K=!1}){const x=(0,t.useId)(),R=(0,t.useRef)(null),$=(0,t.useRef)(null),z=(0,S.of)(Re);(0,t.useEffect)(()=>{R.current&&R.current.resetloadMoreItemsCache(!0),$.current&&$.current.resetAfterIndex(0)},[a]);const y=(0,t.useMemo)(()=>{const G={id:"checkbox",width:0,Header:xe,Cell:We},X={id:"name",width:3,Header:t.createElement("span",{style:{paddingLeft:24}},t.createElement(o.x6,{i18nKey:"browse-dashboards.dashboards-tree.name-column"},"Name")),Cell:Se=>t.createElement(He,{...Se,onFolderClick:l})},ae={id:"tags",width:2,Header:(0,o.t)("browse-dashboards.dashboards-tree.tags-column","Tags"),Cell:Ge};return[K&&G,X,ae].filter(ge.zz)},[l,K]),V=(0,me.useTable)({columns:y,data:a},Ye.A),{getTableProps:ee,getTableBodyProps:te,headerGroups:H}=V,Y=(0,t.useMemo)(()=>({table:V,isSelected:d,onAllSelectionChange:h,onItemSelectionChange:C,treeID:x}),[V,d,h,C,a,x]),de=(0,t.useCallback)(G=>E(G),[E]),ye=(0,t.useCallback)((G,X)=>{const{parentUID:ae}=a[G];M(ae)},[M,a]),gt=(0,t.useCallback)(G=>{const X=a[G];return X.item.kind==="ui"&&X.item.uiKind==="divider"?Ze:Ce},[a]);return t.createElement("div",{...ee(),role:"table"},H.map(G=>{const{key:X,...ae}=G.getHeaderGroupProps({style:{width:r}});return t.createElement("div",{key:X,...ae,className:(0,s.cx)(z.row,z.headerRow)},G.headers.map(pe=>{const{key:Se,...ft}=pe.getHeaderProps();return t.createElement("div",{key:Se,...ft,role:"columnheader",className:z.cell},pe.render("Header",{isSelected:d,onAllSelectionChange:h}))}))}),t.createElement("div",{...te(),"data-testid":le.Tp.pages.BrowseDashboards.table.body},t.createElement(q.A,{ref:R,itemCount:a.length,isItemLoaded:de,loadMoreItems:ye},({onItemsRendered:G,ref:X})=>t.createElement(Ee._m,{ref:ae=>{X(ae),$.current=ae},height:i-Le,width:r,itemCount:a.length,itemData:Y,estimatedItemSize:Ce,itemSize:gt,onItemsRendered:G},Xe))))}function Xe({index:a,style:r,data:i}){const d=(0,S.of)(Re),{table:l,isSelected:h,onItemSelectionChange:C,treeID:E}=i,{rows:M,prepareRow:K}=l,x=M[a];K(x);const R=x.original.item;return R.kind==="ui"&&R.uiKind==="divider"?t.createElement("div",{...x.getRowProps({style:r})},t.createElement("hr",{className:d.divider})):t.createElement("div",{...x.getRowProps({style:r}),className:(0,s.cx)(d.row,d.bodyRow),"aria-labelledby":(0,ve.e)(E,R),"data-testid":le.Tp.pages.BrowseDashboards.table.row("title"in R?R.title:R.uid)},x.cells.map($=>{const{key:z,...y}=$.getCellProps();return t.createElement("div",{key:z,...y,className:d.cell},$.render("Cell",{isSelected:h,onItemSelectionChange:C,treeID:E}))}))}const Re=a=>({row:(0,s.css)({gap:a.spacing(1)}),divider:(0,s.css)({borderTop:`1px solid ${a.colors.border.weak}`,width:"100%",margin:0}),headerRow:(0,s.css)({backgroundColor:a.colors.background.secondary,height:Le}),bodyRow:(0,s.css)({height:Ce,"&:hover":{backgroundColor:a.colors.emphasize(a.colors.background.primary,.03)}}),cell:(0,s.css)({padding:a.spacing(1),overflow:"hidden",display:"flex",alignItems:"center"}),link:(0,s.css)({"&:hover":{textDecoration:"underline"}})});function ke({folderUID:a,width:r,height:i,canSelect:d}){const l=(0,D.eC)(a),h=(0,B.useDispatch)(),C=(0,D.q0)(a),E=(0,D.Ms)(),M=(0,D.V6)(),K=(0,t.useCallback)((y,V)=>{h((0,D.wn)({folderUID:y,isOpen:V})),V&&h((0,D.Ii)({parentUID:y,pageSize:ue.md}))},[h]),x=(0,t.useCallback)((y,V)=>{h((0,D.t$)({item:y,isSelected:V}))},[h]),R=(0,t.useCallback)(y=>{if(y==="$all"){if(E.$all)return N.Selected;for(const te of Object.values(E))if(typeof te!="boolean"){for(const H in te)if(te[H])return N.Mixed}return N.Unselected}return E[y.kind][y.uid]?N.Selected:Be(y,M,E)?N.Mixed:N.Unselected},[E,M]),$=(0,t.useCallback)(y=>{const V=C[y];if(!V)return!1;const ee=V.item;return!(ee.kind==="ui"&&ee.uiKind==="pagination-placeholder")},[C]),z=(0,D.Zg)();return l==="fulfilled"&&C.length===0?t.createElement("div",{style:{width:r}},d?t.createElement(re.p,{variant:"call-to-action",button:t.createElement(n.z9,{href:a?`dashboard/new?folderUid=${a}`:"dashboard/new",icon:"plus",size:"lg"},t.createElement(o.x6,{i18nKey:"browse-dashboards.empty-state.button-title"},"Create dashboard")),message:a?(0,o.t)("browse-dashboards.empty-state.title-folder","This folder doesn't have any dashboards yet"):(0,o.t)("browse-dashboards.empty-state.title","You haven't created any dashboards yet")},a&&t.createElement(o.x6,{i18nKey:"browse-dashboards.empty-state.pro-tip"},"Add/move dashboards to your folder at"," ",t.createElement(ce.Y,{external:!1,href:"/dashboards"},"Browse dashboards"))):t.createElement(he.c,{callToActionElement:t.createElement("span",null,"This folder is empty")})):t.createElement(Je,{canSelect:d,items:C,width:r,height:i,isSelected:R,onFolderClick:K,onAllSelectionChange:y=>h((0,D.cT)({isSelected:y,folderUID:a})),onItemSelectionChange:x,isItemLoaded:$,requestLoadMore:z})}function Be(a,r,i){const d=r[a.uid];return d?d.items.some(l=>{const h=i[l.kind][l.uid];return h||Be(l,r,i)}):!1}var qe=e(24180),et=e(38138),Me=e(64539),tt=e(83122),at=e(87978),st=e(49785),nt=e(88575),ot=e(10354),rt=e(67061),lt=e(71500);const Ke={folderName:""};function it({onCancel:a,onConfirm:r}){const{handleSubmit:i,register:d,formState:{errors:l}}=(0,st.mN)({defaultValues:Ke}),h=(0,o.t)("browse-dashboards.action.new-folder-name-required-phrase","Folder name is required."),C=async M=>{try{return await lt.P.validateNewFolderName(M),!0}catch(K){if(K instanceof Error)return K.message;throw K}},E=(0,o.t)("browse-dashboards.new-folder-form.name-label","Folder name");return t.createElement("form",{name:"addFolder",onSubmit:i(M=>r(M.folderName)),"data-testid":le.Tp.pages.BrowseDashboards.NewFolderForm.form},t.createElement(nt.D,{label:E,invalid:!!l.folderName,error:l.folderName&&l.folderName.message},t.createElement(ot.p,{"data-testid":le.Tp.pages.BrowseDashboards.NewFolderForm.nameInput,id:"folder-name-input",defaultValue:Ke.folderName,...d("folderName",{required:h,validate:async M=>await C(M)})})),t.createElement(rt.B,null,t.createElement(n.$n,{variant:"secondary",fill:"outline",onClick:a},t.createElement(o.x6,{i18nKey:"browse-dashboards.new-folder-form.cancel-label"},"Cancel")),t.createElement(n.$n,{type:"submit"},t.createElement(o.x6,{i18nKey:"browse-dashboards.new-folder-form.create-label"},"Create"))))}function dt({parentFolder:a,canCreateDashboard:r,canCreateFolder:i}){const[d,l]=(0,t.useState)(!1),h=(0,qe.zy)(),[C]=(0,v.Vc)(),[E,M]=(0,t.useState)(!1),K=async R=>{try{await C({title:R,parentUid:a?.uid});const $=a?.parents?a.parents.length+1:0;(0,f.rR)("grafana_manage_dashboards_folder_created",{is_subfolder:!!a?.uid,folder_depth:$})}finally{M(!1)}},x=t.createElement(et.W,null,r&&t.createElement(Me.D,{label:T(),onClick:()=>(0,f.rR)("grafana_menu_item_clicked",{url:ie("/dashboard/new",a?.uid),from:h.pathname}),url:ie("/dashboard/new",a?.uid)}),i&&t.createElement(Me.D,{onClick:()=>M(!0),label:L()}),r&&t.createElement(Me.D,{label:O(),onClick:()=>(0,f.rR)("grafana_menu_item_clicked",{url:ie("/dashboard/import",a?.uid),from:h.pathname}),url:ie("/dashboard/import",a?.uid)}));return t.createElement(t.Fragment,null,t.createElement(tt.m,{overlay:x,onVisibleChange:l},t.createElement(n.$n,null,F(),t.createElement(Oe.I,{name:d?"angle-up":"angle-down"}))),E&&t.createElement(at._,{title:L(),subtitle:a?.title?`Location: ${a.title}`:void 0,onClose:()=>M(!1),size:"sm"},t.createElement(it,{onConfirm:K,onCancel:()=>M(!1)})))}function ie(a,r){const i=r?a+"?folderUid="+r:a;return P.$.appSubUrl?P.$.appSubUrl+i:i}var ct=e(9134),ht=e(2960),ut=e(49904);const Ue=(0,t.memo)(({match:a})=>{const{uid:r}=a.params,i=(0,B.useDispatch)(),d=(0,S.of)(mt),[l,h]=(0,_.ET)(),C=h.hasSearchFilters();(0,t.useEffect)(()=>{h.initStateFromUrl(r),i((0,D.cT)({isSelected:!1,folderUID:void 0}))},[i,r,h]),(0,t.useEffect)(()=>{!C&&l.result&&h.setState({result:void 0,includePanels:void 0})},[C,l.result,h]);const{data:E}=(0,v.kH)(r??v.hT),[M]=(0,v.iB)(),K=(0,t.useMemo)(()=>{if(!E)return;const H=(0,m.R4)(E),Y=(0,m.Cg)(E.uid),de=H.children?.find(ye=>ye.id===Y);return de&&(de.active=!0),H},[E]),x=(0,D.QE)(),{canEditFolders:R,canEditDashboards:$,canCreateDashboards:z,canCreateFolders:y}=(0,ut.N)(E),V=R&&r,ee=R||$,te=async H=>{if(E){const Y=await M({...E,title:H});if("error"in Y)throw(0,f.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"failed_with_error",error:Y.error}),Y.error;(0,f.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"success"})}else(0,f.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"failed_no_folderDTO"})};return t.createElement(g.Y,{navId:"dashboards/browse",pageNav:K,onEditTitle:V?te:void 0,actions:t.createElement(t.Fragment,null,E&&t.createElement(ct.m,{folder:E}),(z||y)&&t.createElement(dt,{parentFolder:E,canCreateDashboard:z,canCreateFolder:y}))},t.createElement(g.Y.Contents,{className:d.pageContents},t.createElement(c.Z,{placeholder:b(l.includePanels),value:l.query,escapeRegex:!1,onChange:H=>h.onQueryChange(H)}),x?t.createElement(ne,null):t.createElement(oe,null),t.createElement("div",{className:d.subView},t.createElement(p.Ay,null,({width:H,height:Y})=>C?t.createElement(ht.Q,{canSelect:ee,width:H,height:Y,searchState:l,searchStateManager:h}):t.createElement(ke,{canSelect:ee,width:H,height:Y,folderUID:r})))))}),mt=a=>({pageContents:(0,s.css)({display:"grid",gridTemplateRows:"auto auto 1fr",height:"100%",rowGap:a.spacing(1)}),subView:(0,s.css)({height:"100%"})});Ue.displayName="BrowseDashboardsPage";const Et=Ue},18241:(se,W,e)=>{e.d(W,{T:()=>_});var s=e(96540),t=e(32264),p=e(96374),f=e(94753),S=e(68402),c=e(42418),g=e(8484),B=e(55314),m=e(43907);const _=({onConfirm:o,onDismiss:b,selectedItems:T,...L})=>{const{data:O}=(0,B.G2)(T),F=!t.$.featureToggles.nestedFolders&&O&&(O.alertRule||O.libraryPanel),[v,P]=(0,s.useState)(!1),n=async()=>{P(!0);try{await o(),P(!1),b()}catch{P(!1)}};return s.createElement(p.u,{body:s.createElement(s.Fragment,null,s.createElement(f.E,{element:"p"},s.createElement(g.x6,{i18nKey:"browse-dashboards.action.delete-modal-text"},"This action will delete the following content:")),s.createElement(m.x,{selectedItems:T}),s.createElement(S.$,{v:2})),description:s.createElement(s.Fragment,null,F?s.createElement(c.F,{severity:"warning",title:(0,g.t)("browse-dashboards.action.delete-modal-invalid-title","Cannot delete folder")},s.createElement(g.x6,{i18nKey:"browse-dashboards.action.delete-modal-invalid-text"},"One or more folders contain library panels or alert rules. Delete these first in order to proceed.")):null),confirmationText:"Delete",confirmText:v?(0,g.t)("browse-dashboards.action.deleting","Deleting..."):(0,g.t)("browse-dashboards.action.delete-button","Delete"),onDismiss:b,onConfirm:n,title:(0,g.t)("browse-dashboards.action.delete-modal-title","Delete"),...L})}},51887:(se,W,e)=>{e.d(W,{J:()=>o});var s=e(96540),t=e(37390),p=e(42418),f=e(94753),S=e(68402),c=e(88575),g=e(55852),B=e(36607),m=e(8484),_=e(43907);const o=({onConfirm:b,onDismiss:T,selectedItems:L,...O})=>{const[F,v]=(0,s.useState)(),[P,n]=(0,s.useState)(!1),u=Object.keys(L.folder).filter(w=>L.folder[w]),I=async()=>{if(F!==void 0){n(!0);try{await b(F),n(!1),T()}catch{n(!1)}}};return s.createElement(t.a,{title:(0,m.t)("browse-dashboards.action.move-modal-title","Move"),onDismiss:T,...O},u.length>0&&s.createElement(p.F,{severity:"info",title:(0,m.t)("browse-dashboards.action.move-modal-alert","Moving this item may change its permissions.")}),s.createElement(f.E,{element:"p"},s.createElement(m.x6,{i18nKey:"browse-dashboards.action.move-modal-text"},"This action will move the following content:")),s.createElement(_.x,{selectedItems:L}),s.createElement(S.$,{v:3}),s.createElement(c.D,{label:(0,m.t)("browse-dashboards.action.move-modal-field-label","Folder name")},s.createElement(B.d,{value:F,excludeUIDs:u,onChange:v})),s.createElement(t.a.ButtonRow,null,s.createElement(g.$n,{onClick:T,variant:"secondary",fill:"outline"},s.createElement(m.x6,{i18nKey:"browse-dashboards.action.cancel-button"},"Cancel")),s.createElement(g.$n,{disabled:F===void 0||P,onClick:I,variant:"primary"},P?(0,m.t)("browse-dashboards.action.moving","Moving..."):(0,m.t)("browse-dashboards.action.move-button","Move"))))}},9134:(se,W,e)=>{e.d(W,{m:()=>n});var s=e(96540),t=e(32264),p=e(14110),f=e(12131),S=e(38138),c=e(64539),g=e(83122),B=e(55852),m=e(14578),_=e(87978),o=e(5108),b=e(10096),T=e(8484),L=e(28444),O=e(55314),F=e(49904),v=e(18241),P=e(51887);function n({folder:u}){const[I,w]=(0,s.useState)(!1),[D,j]=(0,s.useState)(!1),[J]=(0,O.aF)(),[ne]=(0,O.Ko)(),{canEditFolders:A,canDeleteFolders:k,canViewPermissions:U,canSetPermissions:Q}=(0,F.N)(u),Z=t.$.featureToggles.nestedFolders&&A,oe=async q=>{await J({folder:u,destinationUID:q}),(0,p.rR)("grafana_manage_dashboards_item_moved",{item_counts:{folder:1,dashboard:0},source:"folder_actions"})},re=async()=>{await ne(u),(0,p.rR)("grafana_manage_dashboards_item_deleted",{item_counts:{folder:1,dashboard:0},source:"folder_actions"});const{parents:q}=u,ge=q&&q.length?q[q.length-1].url:"/dashboards";f.Ny.push(ge)},ce=()=>{b.lE.publish(new L.S8({component:P.J,props:{selectedItems:{folder:{[u.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:oe}}))},he=()=>{b.lE.publish(new L.S8({component:v.T,props:{selectedItems:{folder:{[u.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:re}}))},ue=(0,T.t)("browse-dashboards.folder-actions-button.manage-permissions","Manage permissions"),N=(0,T.t)("browse-dashboards.folder-actions-button.move","Move"),me=(0,T.t)("browse-dashboards.folder-actions-button.delete","Delete"),Ee=s.createElement(S.W,null,U&&s.createElement(c.D,{onClick:()=>j(!0),label:ue}),Z&&s.createElement(c.D,{onClick:ce,label:N}),k&&s.createElement(c.D,{destructive:!0,onClick:he,label:me}));return!U&&!Z&&!k?null:s.createElement(s.Fragment,null,s.createElement(g.m,{overlay:Ee,onVisibleChange:w},s.createElement(B.$n,{variant:"secondary"},s.createElement(T.x6,{i18nKey:"browse-dashboards.folder-actions-button.folder-actions"},"Folder actions"),s.createElement(m.I,{name:I?"angle-up":"angle-down"}))),D&&s.createElement(_._,{title:(0,T.t)("browse-dashboards.action.manage-permissions-button","Manage permissions"),subtitle:u.title,onClose:()=>j(!1),size:"md"},s.createElement(o.x,{resource:"folders",resourceId:u.uid,canSetPermissions:Q})))}},2960:(se,W,e)=>{e.d(W,{Q:()=>T});var s=e(96540),t=e(78368),p=e(14236),f=e(69529),S=e(55852),c=e(8484),g=e(97427),B=e(66359),m=e(31678),_=e(37690);const o=50,b={view:new t.R((0,p.Vc)({fields:[{name:"uid",display:!0,values:Array(o).fill(null)},{name:"kind",display:!0,values:Array(o).fill("dashboard")},{name:"name",display:!0,values:Array(o).fill("")},{name:"location",display:!0,values:Array(o).fill("")},{name:"tags",display:!0,values:Array(o).fill([])}],meta:{custom:{locationInfo:[]}}})),loadMoreItems:()=>Promise.resolve(),isItemLoaded:()=>!1,totalRows:o};function T({width:O,height:F,canSelect:v,searchState:P,searchStateManager:n}){const u=(0,m.useDispatch)(),I=(0,m.useSelector)(U=>U.browseDashboards.selectedItems),w=(0,_.QE)(),{keyboardEvents:D}=(0,g.d)(),j=P.result??b,J=(0,s.useCallback)((U,Q)=>U?U==="*"&&Q==="*"?w:U==="*"?!1:I[L(U)][Q]??!1:!1,[I,w]),ne=(0,s.useCallback)(()=>{u((0,_.cT)({isSelected:!1,folderUID:void 0}))},[u]),A=(0,s.useCallback)((U,Q)=>{const Z=!J(U,Q);u((0,_.t$)({item:{kind:L(U),uid:Q},isSelected:Z}))},[J,u]);if(j.totalRows===0)return s.createElement("div",{style:{width:O}},s.createElement(f.p,{button:s.createElement(S.$n,{variant:"secondary",onClick:n.onClearSearchAndFilters},s.createElement(c.x6,{i18nKey:"browse-dashboards.no-results.clear"},"Clear search and filters")),message:(0,c.t)("browse-dashboards.no-results.text","No results found for your query"),variant:"not-found",role:"alert"}));const k={response:j,selection:v?J:void 0,selectionToggle:v?A:void 0,clearSelection:ne,width:O,height:F,onTagSelected:n.onAddTag,keyboardEvents:D,onDatasourceChange:P.datasource?n.onDatasourceChange:void 0,onClickItem:n.onSearchItemClicked};return s.createElement(B.P,{...k})}function L(O){switch(O){case"folder":return"folder";case"dashboard":return"dashboard";case"panel":return"panel"}throw new Error("Unsupported kind"+O)}},49904:(se,W,e)=>{e.d(W,{N:()=>S});var s=e(32264),t=e(10096),p=e(31678);function f(c,g){return g?t.TP.hasPermissionInMetadata(c,g):t.TP.hasPermission(c)}function S(c){const g=f(p.AccessControlAction.DashboardsCreate,c),B=!!((!c||s.$.featureToggles.nestedFolders)&&f(p.AccessControlAction.FoldersCreate)),m=f(p.AccessControlAction.FoldersDelete,c),_=f(p.AccessControlAction.DashboardsWrite,c),o=f(p.AccessControlAction.FoldersWrite,c),b=f(p.AccessControlAction.FoldersPermissionsWrite,c),T=f(p.AccessControlAction.FoldersPermissionsRead,c);return{canCreateDashboards:g,canCreateFolders:B,canDeleteFolders:m,canEditDashboards:_,canEditFolders:o,canSetPermissions:b,canViewPermissions:T}}},19519:(se,W,e)=>{e.d(W,{bj:()=>O});var s=e(32196),t=e(96540),p=e(32264),f=e(40845),S=e(67061),c=e(10880),g=e(55852),B=e(94354),m=e(73725),_=e(99818),o=e(8484),b=e(64161);function T(){return[{value:b.P.Folders,icon:"folder",description:(0,o.t)("search.actions.view-as-folders","View by folders")},{value:b.P.List,icon:"list-ul",description:(0,o.t)("search.actions.view-as-list","View as list")}]}function L(v){const P=v.layout??b.P.Folders;return P===b.P.Folders&&(v.query||v.sort||v.starred||v.tag.length>0)?b.P.List:P}const O=({onLayoutChange:v,onSortChange:P,onStarredFilterChange:n=()=>{},onTagFilterChange:u,getTagOptions:I,getSortOptions:w,sortPlaceholder:D,onDatasourceChange:j,onPanelTypeChange:J,onSetIncludePanels:ne,state:A,showStarredFilter:k,hideLayout:U})=>{const Q=(0,f.of)(F),Z=L(A),oe=A.tag.length||A.starred||A.query||A.datasource||A.panel_type?[b.P.Folders]:[];return t.createElement("div",{className:Q.actionRow},t.createElement(S.B,{gap:2,alignItems:"center"},t.createElement(_.$,{isClearable:!1,tags:A.tag,tagOptions:I,onChange:u}),p.$.featureToggles.panelTitleSearch&&t.createElement(c.S,{"data-testid":"include-panels",disabled:Z===b.P.Folders,value:A.includePanels,onChange:()=>ne(!A.includePanels),label:(0,o.t)("search.actions.include-panels","Include panels")}),k&&t.createElement("div",{className:Q.checkboxWrapper},t.createElement(c.S,{label:(0,o.t)("search.actions.starred","Starred"),onChange:n,value:A.starred})),A.datasource&&t.createElement(g.$n,{icon:"times",variant:"secondary",onClick:()=>j(void 0)},t.createElement(o.x6,{i18nKey:"search.actions.remove-datasource-filter"},"Datasource: ",{datasource:A.datasource})),A.panel_type&&t.createElement(g.$n,{icon:"times",variant:"secondary",onClick:()=>J(void 0)},"Panel: ",A.panel_type)),t.createElement(S.B,{gap:2},!U&&t.createElement(B.z,{options:T(),disabledOptions:oe,onChange:v,value:Z}),t.createElement(m.r,{onChange:re=>P(re?.value),value:A.sort,getSortOptions:w,placeholder:D||(0,o.t)("search.actions.sort-placeholder","Sort"),isClearable:!0})))};O.displayName="ActionRow";const F=v=>({actionRow:(0,s.css)`
      display: none;

      ${v.breakpoints.up("md")} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: ${v.spacing(2)};
        width: 100%;
      }
    `,checkboxWrapper:(0,s.css)`
      label {
        line-height: 1.2;
      }
    `})},39788:(se,W,e)=>{e.d(W,{ET:()=>v,lC:()=>L,ue:()=>o});var s=e(2543),t=e.n(s),p=e(12131),f=e(2619),S=e(33390),c=e(53477),g=e(6204),B=e(24439),m=e(64161),_=e(16757);const o={query:"",tag:[],starred:!1,layout:m.P.Folders,sort:void 0,prevSort:void 0,eventTrackingNamespace:"dashboard_search",deleted:!1},b={sort:null,starred:null,query:null,tag:null,layout:null},T=()=>localStorage.getItem(c.YU)===m.P.List?m.P.List:m.P.Folders;class L extends f.Q{constructor(){super(...arguments),this.updateLocation=(0,s.debounce)(n=>p.Ny.partial(n,!0),300),this.doSearchWithDebounce=(0,s.debounce)(()=>this.doSearch(),300),this.lastSearchTimestamp=0,this.onCloseSearch=()=>{this.updateLocation({search:null,folder:null,...b})},this.onClearSearchAndFilters=()=>{this.setStateAndDoSearch({query:"",datasource:void 0,tag:[],panel_type:void 0,starred:void 0,sort:void 0})},this.onQueryChange=n=>{this.setStateAndDoSearch({query:n})},this.onRemoveTag=n=>{this.setStateAndDoSearch({tag:this.state.tag.filter(u=>u!==n)})},this.onTagFilterChange=n=>{this.setStateAndDoSearch({tag:n})},this.onAddTag=n=>{this.state.tag&&this.state.tag.includes(n)||this.setStateAndDoSearch({tag:[...this.state.tag,n]})},this.onDatasourceChange=n=>{this.setStateAndDoSearch({datasource:n})},this.onPanelTypeChange=n=>{this.setStateAndDoSearch({panel_type:n})},this.onStarredFilterChange=n=>{const u=n.currentTarget.checked;this.setStateAndDoSearch({starred:u})},this.onClearStarred=()=>{this.setStateAndDoSearch({starred:!1})},this.onSortChange=n=>{n?localStorage.setItem(c.w7,n):localStorage.removeItem(c.w7),this.state.layout===m.P.Folders?this.setStateAndDoSearch({sort:n,layout:m.P.List}):this.setStateAndDoSearch({sort:n})},this.onLayoutChange=n=>{localStorage.setItem(c.YU,n),this.state.sort&&n===m.P.Folders?this.setStateAndDoSearch({layout:n,prevSort:this.state.sort,sort:void 0}):this.setStateAndDoSearch({layout:n,sort:this.state.prevSort})},this.onSetIncludePanels=n=>{this.setStateAndDoSearch({includePanels:n}),S.A.set(c.d7,n)},this.getTagOptions=()=>{const n=this.lastQuery??{kind:["dashboard","folder"],query:"*"};return(0,B.getGrafanaSearcher)().tags(n)},this.onSearchItemClicked=n=>{(0,g.MK)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})},this.onReportSearchUsage=()=>{(0,g.Pf)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})}}initStateFromUrl(n,u=!0){const I=(0,_.N1)(p.Ny.getSearchObject());(I.query||I.datasource||I.panel_type)&&(I.layout=m.P.List);const w=T(),D=localStorage.getItem(c.w7)??void 0,j=w===m.P.List?I.sort||D:null;this.setState({...o,...I,layout:w,sort:j??o.sort,prevSort:D,folderUid:n,eventTrackingNamespace:n?"manage_dashboards":"dashboard_search",deleted:this.state.deleted}),u&&this.hasSearchFilters()&&this.doSearch()}setStateAndDoSearch(n){const u=n.sort||this.state.sort||localStorage.getItem(c.w7)||void 0;this.setState({sort:u,...n}),this.updateLocation({query:this.state.query.length===0?null:this.state.query,tag:this.state.tag,datasource:this.state.datasource,panel_type:this.state.panel_type,starred:this.state.starred?this.state.starred:null,sort:this.state.sort}),this.hasSearchFilters()&&this.doSearchWithDebounce()}hasSearchFilters(){return this.state.query||this.state.tag.length||this.state.starred||this.state.panel_type||this.state.sort||this.state.deleted||this.state.layout===m.P.List}getSearchQuery(){const n={query:this.state.query,tags:this.state.tag,ds_uid:this.state.datasource,panel_type:this.state.panel_type,location:this.state.folderUid,sort:this.state.sort,explain:this.state.explain,withAllowedActions:this.state.explain,starred:this.state.starred,deleted:this.state.deleted};return n.sort?.length&&!n.sort.includes("name")&&(n.kind=["dashboard","folder"]),n.query?.length||(n.query="*",n.location||(n.kind=["dashboard","folder"])),!this.state.includePanels&&!n.kind&&(n.kind=["dashboard","folder"]),n.panel_type?.length&&(n.kind=["panel"]),n}doSearch(){const n={layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted};(0,g.J$)(this.state.eventTrackingNamespace,n),this.lastQuery=this.getSearchQuery(),this.setState({loading:!0});const u=(0,B.getGrafanaSearcher)(),I=Date.now();(this.state.starred?u.starred(this.lastQuery):u.search(this.lastQuery)).then(D=>{I>this.lastSearchTimestamp&&(this.setState({result:D,loading:!1}),this.lastSearchTimestamp=I)}).catch(D=>{(0,g.KZ)(this.state.eventTrackingNamespace,{...n,error:D?.message}),this.setState({loading:!1})})}}let O;function F(){if(!O){const n=localStorage.getItem(c.YU)??o.layout;let u=S.A.getBool(c.d7,!0);u&&(u=!1),O=new L({...o,layout:n,includePanels:u})}return O}function v(){const P=F();return[P.useState(),P]}}}]);

//# sourceMappingURL=DashboardListPage.b0092711b080bc4aa3a5.js.map