import{g as C}from"./time-DV1jhQHd.js";import{_ as r,u as R}from"./index-CmeE5j0x.js";import{i as u}from"./echarts-U_B2kW3-.js";import{o as d,c as h,a as e,az as g,d as S,ah as p,M as k,O as n,U as o,u as c,T as _,ax as q,ay as A}from"./@vue-JJjsWFC4.js";import"./axios-Cm0UX6qg.js";import"./pinia-DxKmAzm6.js";import"./vue-router-BauBeqfh.js";import"./element-plus-gDGsSZFq.js";import"./lodash-es-CrQyXJRP.js";import"./@vueuse-BvQFniWC.js";import"./@element-plus-D5xpP_yz.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Cdlb6j_n.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";import"./default-passive-events-BHG8ztru.js";import"./nprogress-DPi0kXQt.js";import"./vite-plugin-mock-DmzKHbMQ.js";import"./mockjs-DNXaZA0Z.js";import"./path-to-regexp-mOxPpBbg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-BCsGRjsx.js";const $={name:"Chart",mounted(){this.initChart()},methods:{initChart(){const t=u(document.getElementById("geochart")),a=u(document.getElementById("graphmedchart")),s={title:{text:"Database",subtext:"Dataset & Sample",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",data:["Covid-19","Atelectasis","Mycoplasma","Asthma","BPD","RSV","Atelectasis(➗10)","Covid-19(➗100,000)"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0,pixelRatio:5}}},series:[{name:"Dataset",type:"pie",radius:[80,140],center:["25%","50%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5},label:{show:!0,position:"inner"},emphasis:{label:{show:!0,fontSize:10,fontWeight:"bold"}},data:[{value:5,name:"Asthma"},{value:4,name:"RSV"},{value:3,name:"BPD"},{value:1,name:"Mycoplasma"},{value:1,name:"Atelectasis"},{value:1,name:"Covid-19"}]},{name:"Sample",type:"pie",radius:[20,140],center:["75%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{value:348,name:"BPD"},{value:348,name:"Mycoplasma"},{value:424,name:"RSV"},{value:907,name:"Asthma"},{value:852.7,name:"Atelectasis(➗10)"},{value:1230,name:"Covid-19(➗100,000)"}]}]};t.setOption(s);const i={title:{text:"R shiny tools",subtext:"GraphMed",left:"center"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{saveAsImage:{show:!0,pixelRatio:5}}},legend:{orient:"vertical",left:"left"},series:[{name:"Tools number",type:"pie",radius:"60%",data:[{value:9,name:"Omics tools"},{value:12,name:"Clinic tools"},{value:3,name:"Lab.tools"},{value:10,name:"Basic graphic"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};a.setOption(i)}}},B=e("div",{id:"geochart",style:{width:"100%",height:"400px","padding-right":"10%"}},null,-1),D=e("div",{id:"graphmedchart",style:{width:"100%",height:"400px","padding-top":"2%","padding-right":"10%"}},null,-1),G=[B,D];function I(t,a,s,i,m,l){return d(),h("div",null,G)}const f=r($,[["render",I]]),M="/images/graphmed/tools.jpg",V={},N={style:{padding:"10px","padding-top":"0px"}},T=g('<span><h2 style="text-align:center;font-weight:700;font-size:20px;"> R shiny tools: GraphMed </h2><br><p> GraphMed is a web-based tool for medical data analysis and visualization based on R shiny, which aims to provide easy-to-use and practical data analysis and visualization services, reduce the cost of related skill learning, and enable researchers to focus on why (scientific questions) rather than how (skills learning), helping them process data more easily and quickly. </p><p> Some of the tools have been uploaded to the <a href="https://hiplot.com.cn" target="_blank" rel="noopener noreferrer"> Hiplot </a> and have received good feedback and have been used more than 10,000 times. If you are confused about the use, you can leave a message on <a href="https://stu.chcmu.asia" target="_blank"> our laboratory website </a> , or you can leave a message to me through Hiplot. If you have a shiny tool that you would like to place here or are interested, you can contact us via email 2020111042@stu.cqmu.edu.cn. </p><br></span><div style="display:flex;"><span style="width:50%;"><img src="'+M+'" alt="tools" style="width:100%;"></span><span style="width:50%;"><br><a href="https://gitee.com/bingmp/" target="_blank"><h4>Gitee</h4></a><br><p> For RNA-seq and Enrichment, this web may not run successfully due to network reasons, please refer to the instructions in Gitee (or Docker) and run it on your local computer. </p><br><h4>FAQ</h4><ul><li> Reference data: click &quot;show data&quot;, or download the corresponding reference data of the respective tool; </li><li> Upload data in csv/xlsx/xls. The CSV file is encoded in the format of &quot;GB18030&quot;. </li><li>Click &quot;Analysis&quot; or &quot;Start drawing&quot; to analyze.</li><li>Adjust analysis or graphic parameters.</li><li> The map does not need to download the reference data, and can directly click to modify the sample data after running. </li><li>Other graphics, updating......</li></ul></span></div><div><br><p> GraphMed 是基于 R shiny 编写的一个医学数据分析及可视化的网页工具， 旨在提供简便易用、实用性高的数据分析与可视化服务，降低相关技能学习成本， 使得研究人员可将精力集中于“科学问题”而非“技能学习”，帮助其更加便捷、快速地处理数据。 </p><p> 部分工具上传至 Hiplot 平台（https://hiplot.com.cn），收到良好反馈，使用次数已过万。 对于使用中存在的困惑，可在我们实验室网站留言，也可通过 Hiplot 给我留言。 若有shiny 工具想布置在此处或感兴趣者，均可通过邮箱 2020111042@stu.cqmu.edu.cn 联系。 </p><p> 对于差异分析（RNA-seq）以及富集分析（Enrichment）， 由于网络原因，此网页可能无法成功运行， 可参考 Gitee 中说明，用本地电脑运行。 </p><br><br><h4>FAQ</h4><br><p>1、参考参考数据：点击“show data”，或下载各自工具的对应参考数据；</p><p>2、上传数据，格式为 csv/xlsx/xls。csv 文件编码格式为 “GB18030”。</p><p> 3、点击“Analysis”/“Start drawing”进行分析。。 4、调节分析或图形参数。 </p><p>5、地图可不用下载参考数据，直接点击运行后修改示例数据即可。</p><p>6、其他图形，更新中......</p></div>',3),O=[T];function z(t,a){return d(),h("div",N,O)}const v=r(V,[["render",z]]),H="/images/labinfo/lab.jpg",E="/images/labinfo/chcmu.jpg",L={},P={style:{padding:"10px"}},U=g('<h1 style="text-align:center;">重庆医科大学附属儿童医院呼吸病学研究室</h1><h3 style="text-align:center;"> Laboratory of Pediatric Respiratory Medicine, Children&#39;s Hospital of Chongqing Medical University </h3><p> 重庆医科大学附属儿童医院呼吸专业成立于80年代初， 1992年获重庆市儿童哮喘防治中心， 2005年成立重庆医科大学小儿过敏性疾病诊疗中心， 2007年成立重庆医科大学附属儿童医院呼吸中心， 2008年获重庆市医学专业重点学科，2011年获得卫生部临床重点专科。 目前正致力于建设成为西部一流、国内领先的小儿呼吸系统疾病 诊断、治疗、研究与培训中心。 </p><div style="text-align:center;"><img src="'+H+'" height="200px"><img src="'+E+'" height="200px"></div><h3>【重庆医科大学附属儿童医院介绍】</h3><p> 重庆医科大学附属儿童医院于1956年由上海医学院儿科系（现复旦大学医学院儿科系）迁渝创建，是集医教研为一体的国家三级甲等综合性儿童医院，最早被国家授予儿科学硕士、博士学位授予点、博士后流动站，是首批儿科学国家重点学科，是国家精品课程、国家级教学团队、教育部重点实验室、国家食品药品监督管理局药物... </p><h5>儿童呼吸病学重点学科介绍</h5><p> 重庆医科大学附属儿童医院呼吸专业成立于80年代初，1992年获重庆市儿童哮喘防治中心，2005年成立重庆医科大学小儿过敏性疾病诊疗中心，2007年成立重庆医科大学附属儿童医院呼吸中心，2008年获重庆市医学专业重点学科，2011年获得卫生部临床重点专科。目前正致力于建设成为西部一流、国内领先的小儿呼吸系统疾病诊断、治疗、研究与培训中心。 </p><h5>学术地位与任职</h5><p> 学科带头人、学科带头人后备人选以及骨干人员担任中华医学会儿科分会儿童药理学组副组长、中华医学会儿科分会呼吸学组委员、重庆市医学会儿科专委会主任委员、呼吸学组组长、副组长、重庆市中西医结合学会儿科专委会副主任委员、重庆市中西医结合学会呼吸专业委员会副主任委员、西南地区儿童哮喘协作组组长、全国小儿纤维支气管镜协作组副组长、中国儿童慢性咳嗽专家委员会成员、《中华儿科杂志》、《中国实用儿科杂志》、《临床儿科杂志》、《重庆医学杂志》、《儿科药学杂志》等核心杂志编委或常务编委 </p><br><h3>【学术带头人及团队】</h3><h5>学术带头人：</h5><p>符州教授、刘恩梅教授 呼吸科室主任：罗征秀教授</p><h5>研究室专职人员：</h5><p>任洛助理研究员、陈诗懿助理实验师、王润助理实验师</p><h5>研究团队：</h5><p> 教授/主任医师5名、副教授/副主任医师14名、主治医师24名、助理研究员1名、助理实验师1名 </p><h5>研究方向</h5><div> 结合儿童呼吸系统疾病特点，以及西部地区和重庆市儿童健康现状及疾病流行特点，主要研究方向： <p>（1）重要及新发呼吸道病原学分子流行病学监测与研究；</p><p>（2）儿童支气管哮喘发病机制、早期干预防治、规范管理研究；</p><p>（3）儿童喘息性疾病高危因素研究；</p><p>（4）儿童慢性咳嗽病因构成比与治疗研究；</p><p>（5）慢性间质性肺疾病基因及临床特征研究；</p><p>（6）呼吸系统疑难危重症的诊治规范；</p><p>（7）人脐带血间充质干细胞治疗急性肺损伤的作用及机制研究。</p></div>',20),j=[U];function F(t,a){return d(),h("div",P,j)}const y=r(L,[["render",F]]),b=t=>(q("data-v-68250c1a"),t=t(),A(),t),Q={class:"box"},W=["src"],X={class:"bottom",style:{display:"flex"}},J={style:{width:"40%"}},K={class:"subtitle"},Y=b(()=>e("div",null,[e("h3",{class:"title"},"Respiratory Disease Database")],-1)),Z=b(()=>e("div",null,[e("p",null," The database focuses on childhood respiratory diseases and is designed to collect clinical, sequencing, and experimental data, which can be used for various data analysis and visualization Data shows below: "),e("ul",null,[e("li",null,"Omics:"),e("p",null," 1679 RNA-seq sequenced samples from children with Asthma, BPD, and respiratory syncytial virus (RSV); "),e("li",null,"Clinic:"),e("p",null,"123 million Covid-19;"),e("p",null,"8527 atelectasis samples;"),e("p",null,"348 mycoplasma Genetic Resistance Mutation related;")])],-1)),ee={components:{HomeCharts:f,Rshiny:v,LabInfo:y},data(){return{activeName:"id1"}},methods:{handleClick(){}}},te=S({...ee,__name:"index",setup(t){let a=R();return(s,i)=>{const m=p("el-card"),l=p("el-tab-pane"),x=p("el-tabs");return d(),k(x,{modelValue:s.activeName,"onUpdate:modelValue":i[0]||(i[0]=w=>s.activeName=w),type:"card",style:{"padding-left":"10px","padding-right":"10px"},onTabClick:s.handleClick},{default:n(()=>[o(l,{label:"Home",name:"id1"},{default:n(()=>[o(m,null,{default:n(()=>[e("div",Q,[e("img",{src:c(a).avatar,alt:"",class:"avatar"},null,8,W),e("div",null,[e("div",X,[e("div",J,[e("p",K," Good "+_(c(C)())+"! "+_(c(a).username),1)]),Y]),Z])])]),_:1}),e("div",null,[o(f)])]),_:1}),o(l,{label:"Rshiny",name:"id4"},{default:n(()=>[o(v)]),_:1}),o(l,{label:"Lab. introduction",name:"id5"},{default:n(()=>[o(y)]),_:1})]),_:1},8,["modelValue","onTabClick"])}}}),qe=r(te,[["__scopeId","data-v-68250c1a"]]);export{qe as default};
