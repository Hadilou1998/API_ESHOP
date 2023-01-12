/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: ipGYqTimisX8MqqZ4DS9PrqF4rYodQhQy7TCblZ/le/FZzFVpt7fNIJM+Wfp8enPwnadYdMj8Heyc/WRKvFbFg==
 */

/* eslint-disable */
// tslint:disable

interface SetupInstruments {
  DOCUMENTATION: (unknown) | null
  ENABLED: ("YES" | "NO")
  FLAGS: (("controlled")[]) | null
  NAME: string & {readonly __brand?: 'setup_instruments_NAME'}
  PROPERTIES: ("singleton" | "progress" | "user" | "global_statistics" | "mutable" | "controlled_by_default")[]
  TIMED: (("YES" | "NO")) | null
  VOLATILITY: number
}
export default SetupInstruments;

interface SetupInstruments_InsertParameters {
  DOCUMENTATION?: (unknown) | null
  ENABLED: ("YES" | "NO")
  FLAGS?: (("controlled")[]) | null
  NAME: string & {readonly __brand?: 'setup_instruments_NAME'}
  PROPERTIES: ("singleton" | "progress" | "user" | "global_statistics" | "mutable" | "controlled_by_default")[]
  TIMED?: (("YES" | "NO")) | null
  VOLATILITY: number
}
export type {SetupInstruments_InsertParameters}
