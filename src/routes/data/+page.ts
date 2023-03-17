import BetterSqlite3 from 'better-sqlite3';
import type { PageLoad } from '../$types';
// import  Database, { Database } from '@types/better-sqlite3';


function openDb(filename: string) {
    let db: BetterSqlite3.Database;
    db = new BetterSqlite3(filename, {verbose: console.log});
    return db;
}
export const load = ((params) => {
    const dbdb = openDb('$lib/dummy.db');
    return { dbdb };
}) satisfies PageLoad

function getInitialTables(){
    const sql = `
    Select * From T100`;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
}