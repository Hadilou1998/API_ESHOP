/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 1vrxVNo+QM83IDAPWVE5BNu63HUE8UGWUE4jbUXCMytI6W8enaPP3oM3Pb/OX6DlnrIlJpcBa6ClmzGcCDJLxg==
 */

/* eslint-disable */
// tslint:disable

interface Migrations {
  batch: number
  id: number & {readonly __brand?: 'migrations_id'}
  migration: string
}
export default Migrations;

interface Migrations_InsertParameters {
  batch: number
  id: number & {readonly __brand?: 'migrations_id'}
  migration: string
}
export type {Migrations_InsertParameters}
