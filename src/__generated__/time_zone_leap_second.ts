/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: Qx+HI0pr1HVMVwGNT1zpiACBJQ3twAT+aHh79QK4BZCGvNuC0p6rOUIOu8r1T66ZU9Q/pUVvUWeMwVkWj4989g==
 */

/* eslint-disable */
// tslint:disable

/**
 * Leap seconds information for time zones
 */
interface TimeZoneLeapSecond {
  Correction: number
  Transition_time: (string | number | BigInt) & {readonly __brand?: 'time_zone_leap_second_Transition_time'}
}
export default TimeZoneLeapSecond;

/**
 * Leap seconds information for time zones
 */
interface TimeZoneLeapSecond_InsertParameters {
  Correction: number
  Transition_time: (string | number | BigInt) & {readonly __brand?: 'time_zone_leap_second_Transition_time'}
}
export type {TimeZoneLeapSecond_InsertParameters}
