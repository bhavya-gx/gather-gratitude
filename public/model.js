export const KEY='gather.entries.v1';
export const prompts=[
['Small comforts','What ordinary thing made today a little easier?'],
['Your people','Who checked in when you needed it? What did they do?'],
['A moment outside','What did you notice when you slowed down today?'],
['Something you learned','What can you do now that once felt difficult?'],
['A little joy','What made you smile unexpectedly?'],
['Showing up','What is one thing you can thank yourself for?'],
['A shared moment','Which memory with a friend would you like to keep?'],
['A place to land','Where did you feel comfortable being yourself?'],
['Quiet support','Whose small act of kindness stayed with you?'],
['An everyday ritual','Which part of your routine would you miss?'],
['A good meal','What food, and whose care, nourished you recently?'],
['A voice you love','Whose words made a difference this year?'],
['Room to grow','What opportunity are you glad you took?'],
['The little things','What is something good you almost overlooked?'],
['Far but close','Who feels close, even from far away?'],
['A specific thank-you','Who made your year easier? Finish: “When you…, it helped me…”'],
['Before the rush','What do you want to remember about this season?']
];
export function dateKey(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function thanksgiving(year){const first=new Date(year,10,1,12);return new Date(year,10,1+(4-first.getDay()+7)%7+21,12);}
export function season(date=new Date()){let holiday=thanksgiving(date.getFullYear());const today=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12);if(today>holiday)holiday=thanksgiving(date.getFullYear()+1);const days=Math.round((holiday-today)/86400000);return {holiday,days};}
export function promptFor(date=new Date(),offset=0){const {days}=season(date);if(days===0&&offset===0)return ['Thanksgiving Day','What is one moment from today you want to remember—and why?'];const ordinal=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);return prompts[((ordinal+offset)%prompts.length+prompts.length)%prompts.length];}
export function validateEntries(value){if(!Array.isArray(value)||value.length>10000)throw Error('Choose a Gather backup with up to 10,000 entries.');const ids=new Set();return value.map(e=>{if(!e||typeof e.id!=='string'||!e.id||e.id.length>100||ids.has(e.id)||typeof e.text!=='string'||!e.text.trim()||e.text.length>3000||typeof e.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(Date.parse(e.date+'T12:00:00Z'))||new Date(e.date+'T12:00:00Z').toISOString().slice(0,10)!==e.date||!['Everyday','People','Myself'].includes(e.category)||typeof e.prompt!=='string'||e.prompt.length>500)throw Error('This backup contains an invalid entry. Nothing was imported.');ids.add(e.id);return {id:e.id,text:e.text,date:e.date,category:e.category,prompt:e.prompt};});}
export function mergeEntries(current,incoming){const ids=new Set(current.map(e=>e.id));return [...current,...incoming.filter(e=>!ids.has(e.id))].sort((a,b)=>b.date.localeCompare(a.date));}
