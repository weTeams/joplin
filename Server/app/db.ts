export default require('knex')({
	client: 'sqlite3',
	connection: {
		filename: __dirname + "/../../db.sqlite"
	}
});

// AUTO-GENERATED-TYPES
/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface User {
  id?: string 
  name: string 
  email: string 
  password: string 
}
export interface Session {
  id?: string 
  user_id: string 
  updated_time: number 
  created_time: number 
}

// AUTO-GENERATED-TYPES