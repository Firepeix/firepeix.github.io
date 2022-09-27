"use strict";(globalThis["webpackChunkebisu_web"]=globalThis["webpackChunkebisu_web"]||[]).push([[64],{8554:(t,e,s)=>{s.d(e,{Z:()=>n});const r={User:"USER",Establishment:"ESTABLISHMENT"},n=r},166:(t,e,s)=>{s.d(e,{BT:()=>n,Ur:()=>a,lt:()=>r});class r{constructor(t="Ops! Ocorreu um erro. Tente novamente mais tarde"){this.message=t,this.color="negative",this.position="top",this.icon="report_problem"}}class n{constructor(t="Aguarde! Estamos processando"){this.message=t,this.color="black",this.position="top",this.spinner=!0,this.timeout=0}}class a{constructor(t="Sucesso!"){this.message=t,this.color="positive",this.position="top",this.icon="check"}}},1980:(t,e,s)=>{s.d(e,{Z:()=>r});class r{constructor(t){this.date=t}static parse(t){const e=t.split(" "),s=e[0].split("-");return new r(new Date(Number(s[0]),Number(s[1])-1,Number(s[2]),0,0,0,0))}display(){const t=this.date.getDate()>=10?this.date.getDate():`0${this.date.getDate()}`,e=this.date.getMonth()>=10?this.date.getMonth():`0${this.date.getMonth()}`;return`${t}/${e}/${this.date.getFullYear()}`}}},3088:(t,e,s)=>{s.d(e,{E:()=>n,x:()=>r});s(6701);class r{static when(t,e,s){let r=e.find((e=>t==e.pattern));if(void 0===r){if(void 0!=s)return s;throw Error(`Padrão não exaustivo para o valor ${t}`)}return r.arm}}class n{constructor(t,e){this.pattern=t,this.arm=e}}},2270:(t,e,s)=>{s.d(e,{Z:()=>n,f:()=>a});s(5363);var r=s(3088);class n{constructor(t){this.value=n.format(t)}get color(){return r.x.when(this.field(),[new r.E(a.Positive,"#21BA45"),new r.E(a.Negative,"#C10015"),new r.E(a.Zero,"#1976D2")])}toReal(t=!0){if(0===this.value)return"R$ 0,00";const e=this.value>-100&&this.value<100;return`${t&&this.value<0?"-":""}R$ ${this.wholeNumber(t)}${e?"0":""},${String(this.value).slice(-2)}`}wholeNumber(){let t=[],e=this.value>0?String(this.value).slice(0,-2):String(this.value).slice(1,-2);return e.split("").reverse().forEach(((e,s)=>{s%3===0&&0!==s&&t.push("."),t.push(e)})),t.reverse().join("")}field(){return this.value>0?a.Positive:this.value<0?a.Negative:a.Zero}static format(t){const e="-"===String(t)[0]?-1:1;return Number(String(t).replace(/\D/,""))*e}}const a={Positive:1,Negative:-1,Zero:0}},6555:(t,e,s)=>{s.d(e,{LZ:()=>I,W4:()=>T,d4:()=>x,sM:()=>A});var r=s(5678),n=s(3118),a=s(2361),i=s(5695),o=s(1759),c=s(1427),u=s(5837),h=s(8341),l=s(8276),d=s(8334),m=s(8290),p=s(6864),y=s(919),w=s(5474);const Z=new r.Z,g=new o.Z,f=new a.Z(Z),v=new i.Z(Z),b=new c.Z(v,w.ebisuClient),C=new h.Z(f,w.ebisuClient),E=new l.Z(g,w.ebisuClient),I=new m.Z(C),A=new p.Z(b),x=new y.Z(E),S=new n.Z(f),_=new u.Z(S,w.ebisuClient),T=new d.Z(_)},5678:(t,e,s)=>{s.d(e,{Z:()=>a});var r=s(2270),n=s(5405);s(1524);class a{toCard(t){return new n.ZP(t.id,t.name,new r.Z(t.budget),new n.Il(t.color.red,t.color.green,t.color.blue))}}},2361:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(1980),n=s(2270),a=s(9135);s(5678);class i{constructor(t){this.mapper=t}toExpense(t){return new a.ZP(t.id,t.name,new n.Z(t.amount),r.Z.parse(t.date),t.payed,a.uG[t.type],t.installments?this.toInstallmentInformation(t.installments):void 0,t.source?this.toExpenseSource(t.source):void 0,t.beneficiary?this.toExpenseSource(t.beneficiary):void 0,t.card?this.mapper.toCard(t.card):void 0)}toInstallmentInformation(t){return new a.sA(t.current,t.total)}toExpenseSource(t){return{...t}}}},1759:(t,e,s)=>{s.d(e,{Z:()=>o});s(8554);var r=s(7809),n=s(1980),a=s(2270),i=s(6167);class o{rawIncomeToIncome(t){return new i.ZP({name:t.name,amount:new a.Z(t.amount),origin:new r.Z(t.source.id,t.source.name,t.source.type),date:n.Z.parse(t.date),frequency:t.frequency})}}},5695:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(2270),n=(s(5405),s(7596)),a=s(5297);s(5678);class i{constructor(t){this.mapper=t}toCreditSummary(t){return new a.Z({card:this.mapper.toCard(t.card),spent:new r.Z(t.spent),planned:new r.Z(t.planned),difference:new r.Z(t.difference)})}toDebitSummary(t){return new n.Z({currentNetAmount:new r.Z(t.current_net_amount),amountToPay:new r.Z(t.amount_to_pay),payedAmount:new r.Z(t.payed_amount),totalAmount:new r.Z(t.total_amount),forecastAmount:new r.Z(t.forecast_amount),currentAmount:new r.Z(t.current_amount)})}}},3118:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(2270),n=s(6755),a=s(1524);s(2361);class i{constructor(t){this.mapper=t}toUser(t){return new n.Z(t.id,t.name)}toUserBalance(t){return new a.Z(new r.Z(t.balance_total),t.user_beneficiary_expenses.map((t=>this.mapper.toExpense(t))),t.friend_beneficiary_expenses.map((t=>this.mapper.toExpense(t))))}}},6167:(t,e,s)=>{s.d(e,{ZP:()=>r});s(2270),s(7809);class r{constructor({name:t,amount:e,origin:s,date:r,frequency:n}){this.name=t,this.amount=e,this.origin=s,this.date=r,this.frequency=n}}},5405:(t,e,s)=>{s.d(e,{Il:()=>r,ZP:()=>n});s(2270);class r{constructor(t,e,s){this.red=t,this.green=e,this.blue=s}}class n{constructor(t,e,s,r){this.id=t,this.name=e,this.budget=s,this.color=r}}},7809:(t,e,s)=>{s.d(e,{Z:()=>r});s(8554);class r{constructor(t,e,s){this.id=t,this.name=e,this.type=s}}},9135:(t,e,s)=>{s.d(e,{Jb:()=>i,ZP:()=>r,sA:()=>n,uG:()=>a});s(2270),s(5405);class r{constructor(t,e,s,r,n,a,i,o,c,u){this.id=t,this.name=e,this.amount=s,this.date=r,this.payed=n,this.type=a,this.installmentInformation=i,this.card=u,this.source=o,this.beneficiary=c}}class n{constructor(t,e){this.currentInstallment=t,this.maxInstallments=e}display(){return this.maxInstallments?`${this.currentInstallment}/${this.maxInstallments}`:this.currentInstallment}}const a={DEBIT:"DEBIT",CREDIT:"CREDIT"};class i{constructor(t){this.name=void 0,this.amount=void 0,this.date=void 0,this.type=t,this.hasInstallments=!1,this.isPayed=!1,this.installmentsInformation=new n(void 0,void 0),this.destiny=void 0}}},7596:(t,e,s)=>{s.d(e,{Z:()=>r});s(2270);class r{constructor({currentNetAmount:t,amountToPay:e,payedAmount:s,totalAmount:r,currentAmount:n,forecastAmount:a}){this.currentNetAmount=t,this.amountToPay=e,this.payedAmount=s,this.totalAmount=r,this.forecastAmount=a,this.currentAmount=n}}},5297:(t,e,s)=>{s.d(e,{Z:()=>r});s(2270),s(5405);class r{constructor({card:t,spent:e,planned:s,difference:r}){this.card=t,this.spent=e,this.planned=s,this.difference=r}}},6755:(t,e,s)=>{s.d(e,{Z:()=>r});class r{constructor(t,e){this.id=t,this.name=e}}},1524:(t,e,s)=>{s.d(e,{Z:()=>r});s(2270),s(9135);class r{constructor(t,e,s){this.balanceTotalAmount=t,this.userBeneficiaryExpenses=e,this.friendBeneficiaryExpenses=s}}},8341:(t,e,s)=>{s.d(e,{Z:()=>r});s(52),s(2361),s(9135);class r{constructor(t,e){this.mapper=t,this.client=e}async getCurrentExpenses(){const t=await this.client.get("/expenses");return t.data.data.map((t=>this.mapper.toExpense(t)))}async pay(t){const e=await this.client.put(`/expenses/${t}/pay`);return e.data.message}async delete(t){const e=await this.client.delete(`/expenses/${t}`);return e.data.message}}},8276:(t,e,s)=>{s.d(e,{Z:()=>r});s(6167),s(52),s(1759);class r{constructor(t,e){this.mapper=t,this.client=e}async getIncomeFromCurrentMonth(){const t=await this.client.get("/incomes");return t.data.data.map((t=>this.mapper.rawIncomeToIncome(t)))}}},1427:(t,e,s)=>{s.d(e,{Z:()=>r});s(5695),s(7596),s(5297),s(52);class r{constructor(t,e){this.mapper=t,this.client=e}async getCreditSummaryForCurrentMonth(){const t=await this.client.get("/purchases/credit/summary");return t.data.data.map((t=>this.mapper.toCreditSummary(t)))}async getDebitSummaryForCurrentMonth(){const t=await this.client.get("/purchases/debit/summary");return this.mapper.toDebitSummary(t.data.data)}}},5837:(t,e,s)=>{s.d(e,{Z:()=>r});s(3118),s(52),s(1524);class r{constructor(t,e){this.mapper=t,this.client=e}async getFriends(){const t=await this.client.get("/users/friends");return t.data.data.map((t=>this.mapper.toUser(t)))}async getUserFriendBalance(t){const e=await this.client.get(`/users/friends/${t}/balance`);return this.mapper.toUserBalance(e.data.data)}async getAuthToken(t,e){return(await this.client.post("/auth/login",{email:t,password:e})).data.token}}},8290:(t,e,s)=>{s.d(e,{Z:()=>r});s(9135),s(2270),s(8341);class r{constructor(t){this.repository=t}async getCurrentExpenses(){return await this.repository.getCurrentExpenses()}async pay(t){return await this.repository.pay(t)}async delete(t){return await this.repository.delete(t)}}},919:(t,e,s)=>{s.d(e,{Z:()=>r});s(6167),s(8276);class r{constructor(t){this.repository=t}async getIncomes(){return await this.repository.getIncomeFromCurrentMonth()}}},6864:(t,e,s)=>{s.d(e,{Z:()=>r});s(7596),s(5297),s(1427);class r{constructor(t){this.repository=t}async getCreditSummary(){return await this.repository.getCreditSummaryForCurrentMonth()}async getDebitSummary(){return await this.repository.getDebitSummaryForCurrentMonth()}}},8334:(t,e,s)=>{s.d(e,{Z:()=>n});s(5837);var r=s(589);class n{constructor(t){this.repository=t}async getFriends(){return await this.repository.getFriends()}async getUserFriendBalance(t){return await this.repository.getUserFriendBalance(t)}async login(t,e){const s=await this.repository.getAuthToken(t,e);r.Z.set("AUTH_TOKEN",s)}}},7035:(t,e,s)=>{s.d(e,{Z:()=>h});var r=s(3673);const n={__name:"Card",props:{flat:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup(t){return(e,s)=>{const n=(0,r.up)("q-card-section"),a=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(a,{class:"my-card",flat:t.flat,bordered:t.bordered},{default:(0,r.w5)((()=>[(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3})])),_:3},8,["flat","bordered"])}}};var a=s(151),i=s(5589),o=s(7518),c=s.n(o);const u=n,h=u;c()(n,"components",{QCard:a.Z,QCardSection:i.Z})}}]);