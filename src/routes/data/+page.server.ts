import BetterSqlite3, { type Statement } from 'better-sqlite3';
//import type { Options } from '@types/better-sqlite3;
import type { PageServerLoad } from './$types';


export const load = (({ params }) => {
    
    let db: BetterSqlite3.Database;
    db = new BetterSqlite3('src/lib/dummy.db', {verbose: console.log});
    const sql = `
        Select * From T100`;
    const stmnt: Statement = db.prepare(sql);
    const rows = stmnt.all();

  return { 
    page: params,
    sqlQuery: rows };
}) satisfies PageServerLoad;

