import {test} from 'node:test';import assert from 'node:assert/strict';import {thanksgiving,season,promptFor,validateEntries,mergeEntries,dateKey} from '../public/model.js';
test('Thanksgiving is the fourth Thursday across years',()=>{for(let year=2020;year<2050;year++){const d=thanksgiving(year);assert.equal(d.getDay(),4);assert.ok(d.getDate()>=22&&d.getDate()<=28);}assert.equal(dateKey(thanksgiving(2026)),'2026-11-26');});
test('holiday day and year rollover use local calendar days',()=>{assert.equal(season(new Date(2026,10,9,23)).days,17);assert.equal(season(new Date(2026,10,26,23)).days,0);assert.equal(season(new Date(2026,10,27)).holiday.getFullYear(),2027);assert.equal(promptFor(new Date(2026,10,26))[0],'Thanksgiving Day');});
const entry={id:'1',date:'2026-11-09',text:'A kind call',category:'People',prompt:'Who helped?'};
test('backup validation rejects dangerous shapes and oversized entries',()=>{assert.throws(()=>validateEntries({}));assert.throws(()=>validateEntries([{...entry,text:'x'.repeat(3001)}]));assert.throws(()=>validateEntries([entry,entry]));assert.throws(()=>validateEntries([{...entry,category:'unknown'}]));assert.deepEqual(validateEntries([entry]),[entry]);});
test('restore merges by id without replacing existing entries',()=>{assert.deepEqual(mergeEntries([entry],[{...entry,text:'Changed'}, {...entry,id:'2'}]),[entry,{...entry,id:'2'}]);});
test('every day and alternate prompt returns valid content',()=>{for(let day=1;day<=365;day++){const p=promptFor(new Date(2026,0,day),4);assert.equal(p.length,2);assert.ok(p[1].length>10);}});

test('invalid calendar dates in backups are rejected',()=>{assert.throws(()=>validateEntries([{...entry,date:'2026-02-30'}]));assert.throws(()=>validateEntries([{...entry,date:'2026-13-01'}]));});
