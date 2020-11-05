import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  auditLogs: AuditLogType;
  powerCommand: DeviceType;
  disArmAllTimers: DeviceType;
  ArmdisarmAllPowerDevicesTimers: DeviceType;
  disArmAndCreateTimers: DeviceType;
  allPowerDevicesTimers: DeviceType;
  floorPlan: FloorPlanType;
  deleteFloorPlan: FloorPlanType;
  floors: Array<FloorType>;
  floor: FloorType;
  deleteFloor: FloorType;
  archiveFloorPlan: FloorType;
  lastDayPowerLogsForFloor: ThingEnergyType;
  lastWeekPowerLogsForFloor: ThingEnergyType;
  currentMonthPowerLogsForFloor: ThingEnergyType;
  getInterlockingRule: InterlockingRulesType;
  getAllInterlockingRules: Array<InterlockingRulesType>;
  deviceInterlockingRules: Array<InterlockingRulesType>;
  cam: CameraType;
  cams: Array<CameraType>;
  organizations: Array<OrganizationType>;
  organization: OrganizationType;
  deleteOrganization: OrganizationType;
  organizationSites: Array<SiteType>;
  addUserToOrganization: UserType;
  addSiteToOrganization: OrganizationType;
  lastDayPowerLogsForOrganization: OrganizationPowerAverageType;
  lastWeekPowerLogsForOrganization: OrganizationPowerAverageType;
  currentMonthPowerLogsForOrganization: OrganizationPowerAverageType;
  organizationPowerDevices: OrganizationPowerAverageType;
  organizationPowerConsumptionAverage: PowerAverageType;
  sites: Array<SiteType>;
  site: SiteType;
  deleteSite: SiteType;
  lastDayPowerLogsForSite: ThingEnergyType;
  lastWeekPowerLogsForSite: ThingEnergyType;
  currentMonthPowerLogsForSite: ThingEnergyType;
  siteDevices: Array<DeviceType>;
  users: Array<UserType>;
  userOrganization: UserType;
  deletedUser: UserType;
  forgotPassword: UserType;
  resetPassword: UserType;
  encryptUserPassword: UserType;
  addUserRole: UserType;
  zones: FloorType;
  zone: ZoneType;
  deleteZone: ZoneType;
  lastDayPowerLogsForZone: ThingEnergyType;
  lastWeekPowerLogsForZone: ThingEnergyType;
  currentMonthPowerLogsForZone: ThingEnergyType;
  thingLastPower: CreatedAt;
  thingLastLWT: CreatedAt;
  devices: Array<DeviceType>;
  device: DeviceType;
  brokerClients: Array<BrokerDeviceType>;
  brokerUnregisteredClients: Array<BrokerDeviceType>;
  getThingsLatestLogs: Array<ThingLogResultType>;
  getThingLatestSensorLogs: DeviceSensorLogs;
  deleteDevice?: Maybe<DeviceType>;
  updateDeviceMac: DeviceType;
  getDevicesWithStatus: ThingStateType;
  addDeviceToDb: DeviceType;
  changeDeviceZone: DeviceType;
  getAverageDataPowerDevices: ThingsAverageResultType;
  devicesAveragePowerConsumptions: ThingLogType;
  getDeviceLatestResult: Array<DevicePowerPublishResultLog>;
  getDeviceTimers: Array<DeviceTimerType>;
  getThingLog: ThingLogType;
  videoRecorder: VideoRecorderType;
  videoRecorders: Array<VideoRecorderType>;
  getVRsForSite: SiteType;
  getAllInterlockEvents: Array<InterlockEventType>;
  getInterlockEvent: InterlockEventType;
  testRandom: Scalars['Float'];
};


export type QueryPowerCommandArgs = {
  command: Scalars['String'];
  commandType: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryDisArmAllTimersArgs = {
  timerNo: Scalars['String'];
  deviceId: Scalars['String'];
};


export type QueryArmdisarmAllPowerDevicesTimersArgs = {
  operation: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryDisArmAndCreateTimersArgs = {
  operation: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryAllPowerDevicesTimersArgs = {
  mac: Scalars['String'];
};


export type QueryFloorPlanArgs = {
  id: Scalars['String'];
};


export type QueryDeleteFloorPlanArgs = {
  id: Scalars['String'];
};


export type QueryFloorArgs = {
  id: Scalars['String'];
};


export type QueryDeleteFloorArgs = {
  id: Scalars['String'];
};


export type QueryArchiveFloorPlanArgs = {
  floor_id: Scalars['String'];
};


export type QueryLastDayPowerLogsForFloorArgs = {
  floorId: Scalars['String'];
};


export type QueryLastWeekPowerLogsForFloorArgs = {
  floorId: Scalars['String'];
};


export type QueryCurrentMonthPowerLogsForFloorArgs = {
  floorId: Scalars['String'];
};


export type QueryGetInterlockingRuleArgs = {
  ruleID: Scalars['String'];
};


export type QueryDeviceInterlockingRulesArgs = {
  mac: Scalars['String'];
};


export type QueryCamArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationArgs = {
  id: Scalars['String'];
};


export type QueryDeleteOrganizationArgs = {
  id: Scalars['String'];
};


export type QueryAddUserToOrganizationArgs = {
  user_id: Scalars['String'];
  organization_id: Scalars['String'];
};


export type QueryAddSiteToOrganizationArgs = {
  site_id: Scalars['String'];
  organization_id: Scalars['String'];
};


export type QuerySiteArgs = {
  id: Scalars['String'];
};


export type QueryDeleteSiteArgs = {
  id: Scalars['String'];
};


export type QueryLastDayPowerLogsForSiteArgs = {
  siteId: Scalars['String'];
};


export type QueryLastWeekPowerLogsForSiteArgs = {
  siteId: Scalars['String'];
};


export type QueryCurrentMonthPowerLogsForSiteArgs = {
  siteId: Scalars['String'];
};


export type QuerySiteDevicesArgs = {
  siteId: Scalars['String'];
};


export type QueryDeletedUserArgs = {
  id: Scalars['String'];
};


export type QueryForgotPasswordArgs = {
  id: Scalars['String'];
};


export type QueryResetPasswordArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type QueryAddUserRoleArgs = {
  role: Scalars['String'];
};


export type QueryZonesArgs = {
  floorId: Scalars['String'];
};


export type QueryZoneArgs = {
  id: Scalars['String'];
};


export type QueryDeleteZoneArgs = {
  id: Scalars['String'];
};


export type QueryLastDayPowerLogsForZoneArgs = {
  zoneId: Scalars['String'];
};


export type QueryLastWeekPowerLogsForZoneArgs = {
  zoneId: Scalars['String'];
};


export type QueryCurrentMonthPowerLogsForZoneArgs = {
  zoneId: Scalars['String'];
};


export type QueryThingLastPowerArgs = {
  POWER: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryThingLastLwtArgs = {
  LWT: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryDeviceArgs = {
  mac: Scalars['String'];
};


export type QueryGetThingsLatestLogsArgs = {
  macs: Array<Scalars['String']>;
};


export type QueryGetThingLatestSensorLogsArgs = {
  mac: Scalars['String'];
};


export type QueryDeleteDeviceArgs = {
  mac: Scalars['String'];
};


export type QueryUpdateDeviceMacArgs = {
  mac_address: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryGetDevicesWithStatusArgs = {
  mac: Scalars['String'];
};


export type QueryAddDeviceToDbArgs = {
  message: Scalars['String'];
  deviceType: Scalars['String'];
  topic: Scalars['String'];
  mac: Scalars['String'];
};


export type QueryChangeDeviceZoneArgs = {
  mac: Scalars['String'];
  target_zone_id: Scalars['String'];
  prev_zone_id: Scalars['String'];
};


export type QueryGetAverageDataPowerDevicesArgs = {
  type: Scalars['String'];
  macs: Array<Scalars['String']>;
};


export type QueryDevicesAveragePowerConsumptionsArgs = {
  macs: Array<Scalars['String']>;
};


export type QueryGetDeviceLatestResultArgs = {
  mac: Scalars['String'];
};


export type QueryGetDeviceTimersArgs = {
  mac: Scalars['String'];
};


export type QueryVideoRecorderArgs = {
  id: Scalars['String'];
};


export type QueryGetVRsForSiteArgs = {
  withCams: Scalars['Boolean'];
  siteID: Scalars['String'];
};


export type QueryGetInterlockEventArgs = {
  eventID: Scalars['String'];
};

export type AuditLogType = {
  __typename?: 'AuditLogType';
  id?: Maybe<Scalars['String']>;
  activity: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  isSuccess: Scalars['Boolean'];
  device?: Maybe<DeviceType>;
  user?: Maybe<UserType>;
  organization?: Maybe<OrganizationType>;
};


export type DeviceType = {
  __typename?: 'DeviceType';
  mac: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  deviceType?: Maybe<DeviceTypeType>;
  configuredIcon?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  deviceIcon?: Maybe<Scalars['String']>;
  deviceText?: Maybe<Scalars['String']>;
  deviceGroup?: Maybe<Scalars['String']>;
  lwtStatus?: Maybe<Scalars['String']>;
  mqtt_topic?: Maybe<Scalars['String']>;
  power_on_state?: Maybe<Scalars['String']>;
  voltage_monitor?: Maybe<Scalars['Boolean']>;
  led_status?: Maybe<Scalars['Boolean']>;
  one_short_timer?: Maybe<Scalars['String']>;
  is_configured?: Maybe<Scalars['Boolean']>;
  is_scheduled?: Maybe<Scalars['Boolean']>;
  zone?: Maybe<ZoneType>;
  interlockingRules?: Maybe<Array<InterlockingRulesType>>;
};

export type DeviceTypeType = {
  __typename?: 'DeviceTypeType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ZoneType = {
  __typename?: 'ZoneType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  canvasRect?: Maybe<Scalars['String']>;
  canvasText?: Maybe<Scalars['String']>;
  canvasGroup?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  floor?: Maybe<FloorType>;
  devices?: Maybe<Array<DeviceType>>;
  updated_at?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type FloorType = {
  __typename?: 'FloorType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  site?: Maybe<SiteType>;
  updated_at?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
  zones?: Maybe<Array<ZoneType>>;
};

export type SiteType = {
  __typename?: 'SiteType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  floors?: Maybe<Array<FloorType>>;
  videoRecorders?: Maybe<Array<VideoRecorderType>>;
  updated_at?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type VideoRecorderType = {
  __typename?: 'VideoRecorderType';
  id: Scalars['String'];
  name: Scalars['String'];
  isNVR: Scalars['Boolean'];
  mac: Scalars['String'];
  ip: Scalars['String'];
  rtspPort: Scalars['Float'];
  userName: Scalars['String'];
  password: Scalars['String'];
  cameras?: Maybe<Array<CameraType>>;
  site: SiteType;
};

export type CameraType = {
  __typename?: 'CameraType';
  id: Scalars['String'];
  name: Scalars['String'];
  mac?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  rtspPort?: Maybe<Scalars['Float']>;
  channel: Scalars['Float'];
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  videoRecorder: VideoRecorderType;
  interlockingRules?: Maybe<Array<InterlockingRulesType>>;
};

export type InterlockingRulesType = {
  __typename?: 'InterlockingRulesType';
  id: Scalars['String'];
  recording: Scalars['Boolean'];
  operation: Scalars['String'];
  status: Scalars['Boolean'];
  device: DeviceType;
  camera: CameraType;
};

export type UserType = {
  __typename?: 'UserType';
  id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newUser?: Maybe<Scalars['Boolean']>;
  role?: Maybe<RoleType>;
  organization?: Maybe<OrganizationType>;
  updated_at?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type RoleType = {
  __typename?: 'RoleType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
  sites?: Maybe<Array<SiteType>>;
  auditLogs?: Maybe<Array<AuditLogType>>;
  user?: Maybe<UserType>;
  audits?: Maybe<Array<AuditLogType>>;
};

export type FloorPlanType = {
  __typename?: 'FloorPlanType';
  id?: Maybe<Scalars['String']>;
  floor_id?: Maybe<Scalars['String']>;
  zones?: Maybe<Scalars['String']>;
};

export type ThingEnergyType = ThingEnergy & {
  __typename?: 'ThingEnergyType';
  TotalStartTime?: Maybe<Scalars['String']>;
  Total?: Maybe<Scalars['Float']>;
  Today?: Maybe<Scalars['Float']>;
  Period?: Maybe<Scalars['Float']>;
  Power?: Maybe<Scalars['Float']>;
  ApparentPower?: Maybe<Scalars['Float']>;
  ReactivePower?: Maybe<Scalars['Float']>;
  Factor?: Maybe<Scalars['Float']>;
  Voltage?: Maybe<Scalars['Float']>;
  Current?: Maybe<Scalars['Float']>;
};

export type ThingEnergy = {
  TotalStartTime?: Maybe<Scalars['String']>;
  Total?: Maybe<Scalars['Float']>;
  Today?: Maybe<Scalars['Float']>;
  Period?: Maybe<Scalars['Float']>;
  Power?: Maybe<Scalars['Float']>;
  ApparentPower?: Maybe<Scalars['Float']>;
  ReactivePower?: Maybe<Scalars['Float']>;
  Factor?: Maybe<Scalars['Float']>;
  Voltage?: Maybe<Scalars['Float']>;
  Current?: Maybe<Scalars['Float']>;
};

export type OrganizationPowerAverageType = {
  __typename?: 'OrganizationPowerAverageType';
  average: ThingEnergyType;
  logs: Array<DevicePowerLogType>;
};

export type DevicePowerLogType = {
  __typename?: 'DevicePowerLogType';
  mac: Scalars['String'];
  type: Scalars['String'];
  deviceType: Scalars['String'];
  average: ThingEnergyType;
  raw: Array<ThingLogType>;
};

export type ThingLogType = {
  __typename?: 'ThingLogType';
  id: Scalars['ID'];
  mac?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  logType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  payload?: Maybe<ThingLogTypePayload>;
  activity?: Maybe<Scalars['String']>;
  lwt?: Maybe<Scalars['String']>;
};

export type ThingLogTypePayload = ThingSensorEnergyType | ThingStateType | ThingStateFourSwitchType | ThingSensorTemperatureType;

export type ThingSensorEnergyType = ThingSensorEnergy & {
  __typename?: 'ThingSensorEnergyType';
  Time?: Maybe<Scalars['String']>;
  ENERGY?: Maybe<ThingEnergyType>;
};

export type ThingSensorEnergy = {
  Time?: Maybe<Scalars['String']>;
  ENERGY?: Maybe<ThingEnergyType>;
};

export type ThingStateType = ThingState & ThingPowerModuleState & {
  __typename?: 'ThingStateType';
  POWER?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['String']>;
  Uptime?: Maybe<Scalars['String']>;
  Vcc?: Maybe<Scalars['Float']>;
  SleepMode?: Maybe<Scalars['String']>;
  Sleep?: Maybe<Scalars['Float']>;
  LoadAvg?: Maybe<Scalars['Float']>;
  Wifi?: Maybe<ThingStateWifiType>;
};

export type ThingState = {
  Time?: Maybe<Scalars['String']>;
  Uptime?: Maybe<Scalars['String']>;
  Vcc?: Maybe<Scalars['Float']>;
  SleepMode?: Maybe<Scalars['String']>;
  Sleep?: Maybe<Scalars['Float']>;
  LoadAvg?: Maybe<Scalars['Float']>;
  Wifi?: Maybe<ThingStateWifiType>;
};

export type ThingStateWifiType = ThingStateWifi & {
  __typename?: 'ThingStateWifiType';
  AP?: Maybe<Scalars['Float']>;
  SSId?: Maybe<Scalars['String']>;
  BSSId?: Maybe<Scalars['String']>;
  Channel?: Maybe<Scalars['Float']>;
  RSSI?: Maybe<Scalars['Float']>;
};

export type ThingStateWifi = {
  AP?: Maybe<Scalars['Float']>;
  SSId?: Maybe<Scalars['String']>;
  BSSId?: Maybe<Scalars['String']>;
  Channel?: Maybe<Scalars['Float']>;
  RSSI?: Maybe<Scalars['Float']>;
};

export type ThingPowerModuleState = {
  POWER?: Maybe<Scalars['String']>;
};

export type ThingStateFourSwitchType = ThingStateFourSwitch & ThingState & {
  __typename?: 'ThingStateFourSwitchType';
  Time?: Maybe<Scalars['String']>;
  Uptime?: Maybe<Scalars['String']>;
  Vcc?: Maybe<Scalars['Float']>;
  SleepMode?: Maybe<Scalars['String']>;
  Sleep?: Maybe<Scalars['Float']>;
  LoadAvg?: Maybe<Scalars['Float']>;
  Wifi?: Maybe<ThingStateWifiType>;
  POWER1?: Maybe<Scalars['String']>;
  POWER2?: Maybe<Scalars['String']>;
  POWER3?: Maybe<Scalars['String']>;
  POWER4?: Maybe<Scalars['String']>;
};

export type ThingStateFourSwitch = {
  POWER1?: Maybe<Scalars['String']>;
  POWER2?: Maybe<Scalars['String']>;
  POWER3?: Maybe<Scalars['String']>;
  POWER4?: Maybe<Scalars['String']>;
  Wifi?: Maybe<ThingStateWifiType>;
};

export type ThingSensorTemperatureType = ThingSensorTemperature & {
  __typename?: 'ThingSensorTemperatureType';
  TempUnit: Scalars['String'];
  Time?: Maybe<Scalars['String']>;
};

export type ThingSensorTemperature = {
  TempUnit: Scalars['String'];
  Time?: Maybe<Scalars['String']>;
};

export type PowerAverageType = PowerAverage & {
  __typename?: 'PowerAverageType';
  lastDay: ThingEnergyType;
  month: ThingEnergyType;
  today: ThingEnergyType;
  week: ThingEnergyType;
};

export type PowerAverage = {
  lastDay: ThingEnergyType;
  month: ThingEnergyType;
  today: ThingEnergyType;
  week: ThingEnergyType;
};

export type CreatedAt = {
  __typename?: 'CreatedAt';
  createdAt?: Maybe<Scalars['DateTime']>;
  success: Scalars['Boolean'];
};

export type BrokerDeviceType = {
  __typename?: 'BrokerDeviceType';
  mac: Scalars['String'];
  topic: Scalars['String'];
  seen: Scalars['DateTime'];
  active: Scalars['Boolean'];
  lwt: Scalars['String'];
};

export type ThingLogResultType = ThingLogResult & {
  __typename?: 'ThingLogResultType';
  device: DeviceType;
  sensor?: Maybe<ThingSensorEnergyType>;
  lwt?: Maybe<Scalars['String']>;
  state?: Maybe<ThingStateType>;
  publish?: Maybe<Scalars['String']>;
};

export type ThingLogResult = {
  device: DeviceType;
  sensor?: Maybe<ThingSensorEnergyType>;
  lwt?: Maybe<Scalars['String']>;
  state?: Maybe<ThingStateType>;
  publish?: Maybe<Scalars['String']>;
};

export type DeviceSensorLogs = {
  __typename?: 'DeviceSensorLogs';
  device?: Maybe<DeviceType>;
  sensor?: Maybe<Array<ThingSensorEnergyType>>;
};

export type ThingsAverageResultType = {
  __typename?: 'ThingsAverageResultType';
  average?: Maybe<ThingEnergyType>;
  devices?: Maybe<Array<DeviceType>>;
};

export type DevicePowerPublishResultLog = {
  __typename?: 'DevicePowerPublishResultLog';
  device?: Maybe<DeviceType>;
  payload?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type DeviceTimerType = {
  __typename?: 'DeviceTimerType';
  id?: Maybe<Scalars['String']>;
  mac_address?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  arm?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  window?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['String']>;
  repeat?: Maybe<Scalars['Float']>;
  output?: Maybe<Scalars['Float']>;
  action?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  set?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type InterlockEventType = {
  __typename?: 'InterlockEventType';
  id: Scalars['String'];
  media: Scalars['String'];
  interlockRule: InterlockingRulesType;
  deviceLog: ThingLogType;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuditLog: AuditLogType;
  powerTimerCommand: DeviceType;
  devicePowerOnState: DeviceType;
  deviceLEDstatus: DeviceType;
  voltageMonitor: DeviceType;
  oneShortTimer: DeviceType;
  addProfilePicture: Scalars['String'];
  newFloorPlan: FloorPlanType;
  updateFloorPlan: FloorPlanType;
  newFloor: FloorType;
  addFloorToSite: FloorType;
  updateFloor: DeviceType;
  addInterlockingRule: InterlockingRulesType;
  updateInterlockingRule: InterlockingRulesType;
  deleteInterlockingRules: Scalars['Float'];
  newCam: CameraType;
  deleteCam: Scalars['String'];
  updateCam: CameraType;
  getStream: CameraStreamType;
  getStreamBeforeSaving: Scalars['Float'];
  addOrganization: OrganizationType;
  newSite: SiteType;
  updateSite: SiteType;
  user: UserType;
  updatedUser: UserType;
  updatedUserStatus: UserType;
  newZone: ZoneType;
  addZoneToFloor: ZoneType;
  updateZone: ZoneType;
  registerNewClients: Array<DeviceType>;
  updateDeviceAllTimers: DeviceType;
  updateDevicePowerOnState: DeviceType;
  updateDeviceVoltageMonitorState: DeviceType;
  updateDeviceLedState: DeviceType;
  updateDeviceOneShortTimer: DeviceType;
  addDevice: DeviceType;
  addManyDevices: Array<DeviceType>;
  updateDeviceData: DeviceType;
  updateSingleTimer: DeviceTimerType;
  addConfigureDevice: DeviceType;
  addDeviceToZone: DeviceType;
  updateDevice: DeviceType;
  updateDeviceConfiguration: DeviceType;
  logThingData?: Maybe<ThingLogType>;
  notifyUpdate: ThingLogType;
  logRawThingData?: Maybe<ThingLogType>;
  newVideoRecorder: VideoRecorderType;
  updateVideoRecorder: VideoRecorderType;
  deleteVideoRecorder: Scalars['String'];
  testEqual: Scalars['Boolean'];
  testSubStartStop: Scalars['Boolean'];
};


export type MutationAddAuditLogArgs = {
  auditlog: AuditLogInput;
};


export type MutationPowerTimerCommandArgs = {
  operation: Scalars['String'];
  timer: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationDevicePowerOnStateArgs = {
  command: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationDeviceLeDstatusArgs = {
  command: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationVoltageMonitorArgs = {
  command: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationOneShortTimerArgs = {
  time: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationAddProfilePictureArgs = {
  image: Scalars['Upload'];
};


export type MutationNewFloorPlanArgs = {
  plan: FloorPlanInput;
};


export type MutationUpdateFloorPlanArgs = {
  id: Scalars['String'];
  plan: FloorPlanInput;
};


export type MutationNewFloorArgs = {
  floor: FloorInput;
};


export type MutationAddFloorToSiteArgs = {
  siteId: Scalars['String'];
  floor: FloorInput;
};


export type MutationUpdateFloorArgs = {
  floor: DeviceInput;
};


export type MutationAddInterlockingRuleArgs = {
  interlockingRule: InterlockingRulesInput;
};


export type MutationUpdateInterlockingRuleArgs = {
  rule: InterlockingRulesUpdateInput;
};


export type MutationDeleteInterlockingRulesArgs = {
  ruleIDs: Array<Scalars['String']>;
};


export type MutationNewCamArgs = {
  camera: CameraInput;
};


export type MutationDeleteCamArgs = {
  cameraID: Scalars['String'];
};


export type MutationUpdateCamArgs = {
  camera: CameraUpdateInput;
};


export type MutationGetStreamArgs = {
  cameraID: Scalars['String'];
};


export type MutationGetStreamBeforeSavingArgs = {
  camera: JustCameraInput;
};


export type MutationAddOrganizationArgs = {
  organization: OrganizationInput;
};


export type MutationNewSiteArgs = {
  site: SiteInput;
};


export type MutationUpdateSiteArgs = {
  site: SiteInput;
};


export type MutationUserArgs = {
  user: UserInput;
};


export type MutationUpdatedUserArgs = {
  id: Scalars['String'];
  user: UserInput;
};


export type MutationUpdatedUserStatusArgs = {
  id: Scalars['String'];
};


export type MutationNewZoneArgs = {
  zone: ZoneInput;
};


export type MutationAddZoneToFloorArgs = {
  floorId: Scalars['String'];
  zone: ZoneInput;
};


export type MutationUpdateZoneArgs = {
  id: Scalars['String'];
  zone: ZoneInput;
};


export type MutationUpdateDeviceAllTimersArgs = {
  mac: Scalars['String'];
};


export type MutationUpdateDevicePowerOnStateArgs = {
  status: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationUpdateDeviceVoltageMonitorStateArgs = {
  status: Scalars['Boolean'];
  mac: Scalars['String'];
};


export type MutationUpdateDeviceLedStateArgs = {
  status: Scalars['Boolean'];
  mac: Scalars['String'];
};


export type MutationUpdateDeviceOneShortTimerArgs = {
  status: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationAddDeviceArgs = {
  device: DeviceInput;
};


export type MutationAddManyDevicesArgs = {
  devices: Array<DeviceInput>;
};


export type MutationUpdateDeviceDataArgs = {
  device: DeviceInput;
  mac: Scalars['String'];
};


export type MutationUpdateSingleTimerArgs = {
  timer: DeviceTimerInput;
};


export type MutationAddConfigureDeviceArgs = {
  device: DeviceInput;
  zoneID: Scalars['String'];
};


export type MutationAddDeviceToZoneArgs = {
  device: DeviceInput;
  zoneId: Scalars['String'];
  mac: Scalars['String'];
};


export type MutationUpdateDeviceArgs = {
  device: DeviceInput;
};


export type MutationUpdateDeviceConfigurationArgs = {
  device: DeviceInput;
  mac: Scalars['String'];
};


export type MutationLogThingDataArgs = {
  log: DeviceLogInput;
};


export type MutationNotifyUpdateArgs = {
  mac: Scalars['String'];
};


export type MutationLogRawThingDataArgs = {
  log: DeviceLogInput;
};


export type MutationNewVideoRecorderArgs = {
  videoRecorder: VideoRecorderInput;
};


export type MutationUpdateVideoRecorderArgs = {
  videoRecorder: VideoRecorderUpdateInput;
};


export type MutationDeleteVideoRecorderArgs = {
  videoRecorderID: Scalars['String'];
};


export type MutationTestEqualArgs = {
  num2: Scalars['Float'];
  num1: Scalars['Float'];
};


export type MutationTestSubStartStopArgs = {
  start: Scalars['Boolean'];
};

export type AuditLogInput = {
  activity: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
  isSuccess?: Maybe<Scalars['Boolean']>;
};


export type FloorPlanInput = {
  organization_id: Scalars['String'];
  site_id: Scalars['String'];
  floor_id: Scalars['String'];
  zones: Scalars['String'];
};

export type FloorInput = {
  name: Scalars['String'];
  image: Scalars['String'];
};

export type DeviceInput = {
  name?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  deviceIcon?: Maybe<Scalars['String']>;
  deviceText?: Maybe<Scalars['String']>;
  deviceGroup?: Maybe<Scalars['String']>;
  configuredIcon?: Maybe<Scalars['String']>;
  mac: Scalars['String'];
  power_on_state?: Maybe<Scalars['String']>;
  voltage_monitor?: Maybe<Scalars['Boolean']>;
  led_status?: Maybe<Scalars['Boolean']>;
  one_short_timer?: Maybe<Scalars['String']>;
  mqtt_topic?: Maybe<Scalars['String']>;
  orgID?: Maybe<Scalars['String']>;
};

export type InterlockingRulesInput = {
  deviceMAC: Scalars['String'];
  cameraID: Scalars['String'];
  recording: Scalars['Boolean'];
  operation: Scalars['String'];
  status: Scalars['Boolean'];
};

export type InterlockingRulesUpdateInput = {
  id: Scalars['String'];
  recording?: Maybe<Scalars['Boolean']>;
  operation?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CameraInput = {
  name: Scalars['String'];
  mac?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  rtspPort?: Maybe<Scalars['Float']>;
  channel: Scalars['Float'];
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  videoRecorderIP: Scalars['String'];
};

export type CameraUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  mac?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  rtspPort?: Maybe<Scalars['Float']>;
  channel?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CameraStreamType = {
  __typename?: 'CameraStreamType';
  camera: CameraType;
  wsPort: Scalars['Float'];
};

export type JustCameraInput = {
  ip: Scalars['String'];
  rtspPort: Scalars['Float'];
  channel: Scalars['Float'];
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type OrganizationInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  website: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
};

export type SiteInput = {
  name: Scalars['String'];
  location: Scalars['String'];
};

export type UserInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ZoneInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  canvasRect?: Maybe<Scalars['String']>;
  canvasText?: Maybe<Scalars['String']>;
  canvasGroup?: Maybe<Scalars['String']>;
};

export type DeviceTimerInput = {
  id?: Maybe<Scalars['String']>;
  mac_address?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  arm?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  window?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['String']>;
  repeat?: Maybe<Scalars['Float']>;
  output?: Maybe<Scalars['Float']>;
  action?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  set?: Maybe<Scalars['Boolean']>;
};

export type DeviceLogInput = {
  mac: Scalars['ID'];
  fullTopic?: Maybe<Scalars['String']>;
  deviceCode?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  command: Scalars['String'];
  activity?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

export type VideoRecorderInput = {
  name: Scalars['String'];
  isNVR: Scalars['Boolean'];
  mac: Scalars['String'];
  ip: Scalars['String'];
  rtspPort: Scalars['Float'];
  userName: Scalars['String'];
  password: Scalars['String'];
  siteID: Scalars['String'];
};

export type VideoRecorderUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  mac?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  rtspPort?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  thingInterlock: InterlockStreamsType;
  thingLogNotification: ThingLogResultType;
  devicePublishNotification: ThingLogResultType;
  thingResultNotification: ThingLogTypeString;
  testSub: Scalars['Float'];
};


export type SubscriptionThingInterlockArgs = {
  macs: Array<Scalars['String']>;
};


export type SubscriptionThingLogNotificationArgs = {
  macs: Array<Scalars['String']>;
};


export type SubscriptionDevicePublishNotificationArgs = {
  macs: Array<Scalars['String']>;
};


export type SubscriptionThingResultNotificationArgs = {
  macs: Array<Scalars['String']>;
};

export type InterlockStreamsType = {
  __typename?: 'InterlockStreamsType';
  cams: Array<CameraType>;
  wsPorts: Array<Scalars['Float']>;
  device: DeviceType;
};

export type ThingLogTypeString = {
  __typename?: 'ThingLogTypeString';
  id: Scalars['ID'];
  mac?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  payloadJson?: Maybe<Scalars['String']>;
  activity?: Maybe<Scalars['String']>;
  lwt?: Maybe<Scalars['String']>;
  device?: Maybe<DeviceType>;
};

export type AddConfigureDeviceMutationVariables = Exact<{
  device: DeviceInput;
  zoneID: Scalars['String'];
}>;


export type AddConfigureDeviceMutation = (
  { __typename?: 'Mutation' }
  & { addConfigureDevice: (
    { __typename?: 'DeviceType' }
    & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
    & { deviceType?: Maybe<(
      { __typename?: 'DeviceTypeType' }
      & Pick<DeviceTypeType, 'id' | 'name'>
    )> }
  ) }
);

export type CamsQueryVariables = Exact<{ [key: string]: never; }>;


export type CamsQuery = (
  { __typename?: 'Query' }
  & { cams: Array<(
    { __typename?: 'CameraType' }
    & Pick<CameraType, 'id' | 'name'>
  )> }
);

export type DeviceQueryVariables = Exact<{
  mac: Scalars['String'];
}>;


export type DeviceQuery = (
  { __typename?: 'Query' }
  & { device: (
    { __typename?: 'DeviceType' }
    & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
    & { deviceType?: Maybe<(
      { __typename?: 'DeviceTypeType' }
      & Pick<DeviceTypeType, 'id' | 'name'>
    )> }
  ) }
);

export type GetDeviceLatestResultQueryVariables = Exact<{
  mac: Scalars['String'];
}>;


export type GetDeviceLatestResultQuery = (
  { __typename?: 'Query' }
  & { getDeviceLatestResult: Array<(
    { __typename?: 'DevicePowerPublishResultLog' }
    & Pick<DevicePowerPublishResultLog, 'payload' | 'createdAt'>
    & { device?: Maybe<(
      { __typename?: 'DeviceType' }
      & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic'>
    )> }
  )> }
);

export type DevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type DevicesQuery = (
  { __typename?: 'Query' }
  & { devices: Array<(
    { __typename?: 'DeviceType' }
    & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon' | 'is_configured'>
    & { deviceType?: Maybe<(
      { __typename?: 'DeviceTypeType' }
      & Pick<DeviceTypeType, 'id' | 'name'>
    )> }
  )> }
);

export type FloorQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FloorQuery = (
  { __typename?: 'Query' }
  & { floor: (
    { __typename?: 'FloorType' }
    & Pick<FloorType, 'id' | 'name'>
    & { zones?: Maybe<Array<(
      { __typename?: 'ZoneType' }
      & Pick<ZoneType, 'id' | 'name'>
      & { devices?: Maybe<Array<(
        { __typename?: 'DeviceType' }
        & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
        & { deviceType?: Maybe<(
          { __typename?: 'DeviceTypeType' }
          & Pick<DeviceTypeType, 'id' | 'name'>
        )> }
      )>> }
    )>> }
  ) }
);

export type GetThingsLatestLogsQueryVariables = Exact<{
  macs: Array<Scalars['String']>;
}>;


export type GetThingsLatestLogsQuery = (
  { __typename?: 'Query' }
  & { getThingsLatestLogs: Array<(
    { __typename?: 'ThingLogResultType' }
    & Pick<ThingLogResultType, 'lwt'>
    & { sensor?: Maybe<(
      { __typename?: 'ThingSensorEnergyType' }
      & Pick<ThingSensorEnergyType, 'Time'>
      & { ENERGY?: Maybe<(
        { __typename?: 'ThingEnergyType' }
        & Pick<ThingEnergyType, 'Current' | 'Voltage' | 'Power'>
      )> }
    )>, state?: Maybe<(
      { __typename?: 'ThingStateType' }
      & Pick<ThingStateType, 'POWER'>
    )>, device: (
      { __typename?: 'DeviceType' }
      & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic'>
    ) }
  )> }
);

export type OrganizationQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrganizationQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'OrganizationType' }
    & Pick<OrganizationType, 'id' | 'name' | 'email' | 'website' | 'address' | 'phone' | 'city' | 'country'>
    & { sites?: Maybe<Array<(
      { __typename?: 'SiteType' }
      & Pick<SiteType, 'id' | 'name'>
      & { floors?: Maybe<Array<(
        { __typename?: 'FloorType' }
        & Pick<FloorType, 'id' | 'name'>
        & { zones?: Maybe<Array<(
          { __typename?: 'ZoneType' }
          & Pick<ZoneType, 'id' | 'name'>
          & { devices?: Maybe<Array<(
            { __typename?: 'DeviceType' }
            & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
            & { deviceType?: Maybe<(
              { __typename?: 'DeviceTypeType' }
              & Pick<DeviceTypeType, 'id' | 'name'>
            )> }
          )>> }
        )>> }
      )>> }
    )>> }
  ) }
);

export type PowerCommandQueryVariables = Exact<{
  command: Scalars['String'];
  commandType: Scalars['String'];
  mac: Scalars['String'];
}>;


export type PowerCommandQuery = (
  { __typename?: 'Query' }
  & { powerCommand: (
    { __typename?: 'DeviceType' }
    & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic'>
  ) }
);

export type RegisterNewClientsMutationVariables = Exact<{ [key: string]: never; }>;


export type RegisterNewClientsMutation = (
  { __typename?: 'Mutation' }
  & { registerNewClients: Array<(
    { __typename?: 'DeviceType' }
    & Pick<DeviceType, 'mac' | 'mqtt_topic'>
    & { deviceType?: Maybe<(
      { __typename?: 'DeviceTypeType' }
      & Pick<DeviceTypeType, 'id' | 'name'>
    )> }
  )> }
);

export type SiteQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SiteQuery = (
  { __typename?: 'Query' }
  & { site: (
    { __typename?: 'SiteType' }
    & Pick<SiteType, 'id' | 'name' | 'location'>
    & { floors?: Maybe<Array<(
      { __typename?: 'FloorType' }
      & Pick<FloorType, 'id' | 'name'>
      & { zones?: Maybe<Array<(
        { __typename?: 'ZoneType' }
        & Pick<ZoneType, 'id' | 'name'>
        & { devices?: Maybe<Array<(
          { __typename?: 'DeviceType' }
          & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
          & { deviceType?: Maybe<(
            { __typename?: 'DeviceTypeType' }
            & Pick<DeviceTypeType, 'id' | 'name'>
          )> }
        )>> }
      )>> }
    )>> }
  ) }
);

export type TestEqualMutationVariables = Exact<{
  n1: Scalars['Float'];
  n2: Scalars['Float'];
}>;


export type TestEqualMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'testEqual'>
);

export type TestRandomQueryVariables = Exact<{ [key: string]: never; }>;


export type TestRandomQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'testRandom'>
);

export type TestSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TestSubSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'testSub'>
);

export type ThingLogNotificationSubscriptionVariables = Exact<{
  macs: Array<Scalars['String']>;
}>;


export type ThingLogNotificationSubscription = (
  { __typename?: 'Subscription' }
  & { thingLogNotification: (
    { __typename?: 'ThingLogResultType' }
    & Pick<ThingLogResultType, 'lwt'>
    & { device: (
      { __typename?: 'DeviceType' }
      & Pick<DeviceType, 'mac'>
    ), sensor?: Maybe<(
      { __typename?: 'ThingSensorEnergyType' }
      & { ENERGY?: Maybe<(
        { __typename?: 'ThingEnergyType' }
        & Pick<ThingEnergyType, 'Power' | 'Voltage' | 'Current'>
      )> }
    )>, state?: Maybe<(
      { __typename?: 'ThingStateType' }
      & Pick<ThingStateType, 'POWER'>
    )> }
  ) }
);

export type ThingResultNotificationSubscriptionVariables = Exact<{
  macs: Array<Scalars['String']>;
}>;


export type ThingResultNotificationSubscription = (
  { __typename?: 'Subscription' }
  & { thingResultNotification: (
    { __typename?: 'ThingLogTypeString' }
    & Pick<ThingLogTypeString, 'id' | 'mac' | 'command' | 'payloadJson' | 'activity' | 'lwt'>
    & { device?: Maybe<(
      { __typename?: 'DeviceType' }
      & Pick<DeviceType, 'mac'>
    )> }
  ) }
);

export type BrokerUnregisteredClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrokerUnregisteredClientsQuery = (
  { __typename?: 'Query' }
  & { brokerUnregisteredClients: Array<(
    { __typename?: 'BrokerDeviceType' }
    & Pick<BrokerDeviceType, 'mac' | 'topic' | 'seen' | 'active' | 'lwt'>
  )> }
);

export type UserOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type UserOrganizationQuery = (
  { __typename?: 'Query' }
  & { userOrganization: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'first_name' | 'last_name' | 'email'>
    & { organization?: Maybe<(
      { __typename?: 'OrganizationType' }
      & Pick<OrganizationType, 'id' | 'name'>
      & { sites?: Maybe<Array<(
        { __typename?: 'SiteType' }
        & Pick<SiteType, 'id' | 'name'>
        & { floors?: Maybe<Array<(
          { __typename?: 'FloorType' }
          & Pick<FloorType, 'id' | 'name'>
          & { zones?: Maybe<Array<(
            { __typename?: 'ZoneType' }
            & Pick<ZoneType, 'id' | 'name'>
            & { devices?: Maybe<Array<(
              { __typename?: 'DeviceType' }
              & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
              & { deviceType?: Maybe<(
                { __typename?: 'DeviceTypeType' }
                & Pick<DeviceTypeType, 'id' | 'name'>
              )> }
            )>> }
          )>> }
        )>> }
      )>> }
    )> }
  ) }
);

export type ZoneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoneQuery = (
  { __typename?: 'Query' }
  & { zone: (
    { __typename?: 'ZoneType' }
    & Pick<ZoneType, 'id' | 'name'>
    & { devices?: Maybe<Array<(
      { __typename?: 'DeviceType' }
      & Pick<DeviceType, 'mac' | 'name' | 'mqtt_topic' | 'configuredIcon'>
      & { deviceType?: Maybe<(
        { __typename?: 'DeviceTypeType' }
        & Pick<DeviceTypeType, 'id' | 'name'>
      )> }
    )>> }
  ) }
);

export const AddConfigureDeviceDocument = gql`
    mutation addConfigureDevice($device: DeviceInput!, $zoneID: String!) {
  addConfigureDevice(device: $device, zoneID: $zoneID) {
    mac
    name
    mqtt_topic
    configuredIcon
    deviceType {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddConfigureDeviceGQL extends Apollo.Mutation<AddConfigureDeviceMutation, AddConfigureDeviceMutationVariables> {
    document = AddConfigureDeviceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CamsDocument = gql`
    query cams {
  cams {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CamsGQL extends Apollo.Query<CamsQuery, CamsQueryVariables> {
    document = CamsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeviceDocument = gql`
    query device($mac: String!) {
  device(mac: $mac) {
    mac
    name
    mqtt_topic
    configuredIcon
    deviceType {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeviceGQL extends Apollo.Query<DeviceQuery, DeviceQueryVariables> {
    document = DeviceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDeviceLatestResultDocument = gql`
    query getDeviceLatestResult($mac: String!) {
  getDeviceLatestResult(mac: $mac) {
    device {
      mac
      name
      mqtt_topic
    }
    payload
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDeviceLatestResultGQL extends Apollo.Query<GetDeviceLatestResultQuery, GetDeviceLatestResultQueryVariables> {
    document = GetDeviceLatestResultDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DevicesDocument = gql`
    query devices {
  devices {
    mac
    name
    mqtt_topic
    configuredIcon
    is_configured
    deviceType {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DevicesGQL extends Apollo.Query<DevicesQuery, DevicesQueryVariables> {
    document = DevicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FloorDocument = gql`
    query floor($id: String!) {
  floor(id: $id) {
    id
    name
    zones {
      id
      name
      devices {
        mac
        name
        mqtt_topic
        configuredIcon
        deviceType {
          id
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FloorGQL extends Apollo.Query<FloorQuery, FloorQueryVariables> {
    document = FloorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetThingsLatestLogsDocument = gql`
    query getThingsLatestLogs($macs: [String!]!) {
  getThingsLatestLogs(macs: $macs) {
    sensor {
      Time
      ENERGY {
        Current
        Voltage
        Power
      }
    }
    state {
      POWER
    }
    lwt
    device {
      mac
      name
      mqtt_topic
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetThingsLatestLogsGQL extends Apollo.Query<GetThingsLatestLogsQuery, GetThingsLatestLogsQueryVariables> {
    document = GetThingsLatestLogsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrganizationDocument = gql`
    query organization($id: String!) {
  organization(id: $id) {
    id
    name
    email
    website
    address
    phone
    city
    country
    sites {
      id
      name
      floors {
        id
        name
        zones {
          id
          name
          devices {
            mac
            name
            mqtt_topic
            configuredIcon
            deviceType {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationGQL extends Apollo.Query<OrganizationQuery, OrganizationQueryVariables> {
    document = OrganizationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PowerCommandDocument = gql`
    query powerCommand($command: String!, $commandType: String!, $mac: String!) {
  powerCommand(command: $command, commandType: $commandType, mac: $mac) {
    mac
    name
    mqtt_topic
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PowerCommandGQL extends Apollo.Query<PowerCommandQuery, PowerCommandQueryVariables> {
    document = PowerCommandDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterNewClientsDocument = gql`
    mutation registerNewClients {
  registerNewClients {
    mac
    deviceType {
      id
      name
    }
    mqtt_topic
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterNewClientsGQL extends Apollo.Mutation<RegisterNewClientsMutation, RegisterNewClientsMutationVariables> {
    document = RegisterNewClientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SiteDocument = gql`
    query site($id: String!) {
  site(id: $id) {
    id
    name
    location
    floors {
      id
      name
      zones {
        id
        name
        devices {
          mac
          name
          mqtt_topic
          configuredIcon
          deviceType {
            id
            name
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SiteGQL extends Apollo.Query<SiteQuery, SiteQueryVariables> {
    document = SiteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TestEqualDocument = gql`
    mutation testEqual($n1: Float!, $n2: Float!) {
  testEqual(num1: $n1, num2: $n2)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TestEqualGQL extends Apollo.Mutation<TestEqualMutation, TestEqualMutationVariables> {
    document = TestEqualDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TestRandomDocument = gql`
    query testRandom {
  testRandom
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TestRandomGQL extends Apollo.Query<TestRandomQuery, TestRandomQueryVariables> {
    document = TestRandomDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TestSubDocument = gql`
    subscription testSub {
  testSub
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TestSubGQL extends Apollo.Subscription<TestSubSubscription, TestSubSubscriptionVariables> {
    document = TestSubDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ThingLogNotificationDocument = gql`
    subscription thingLogNotification($macs: [String!]!) {
  thingLogNotification(macs: $macs) {
    device {
      mac
    }
    sensor {
      ENERGY {
        Power
        Voltage
        Current
      }
    }
    lwt
    state {
      POWER
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ThingLogNotificationGQL extends Apollo.Subscription<ThingLogNotificationSubscription, ThingLogNotificationSubscriptionVariables> {
    document = ThingLogNotificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ThingResultNotificationDocument = gql`
    subscription thingResultNotification($macs: [String!]!) {
  thingResultNotification(macs: $macs) {
    id
    mac
    command
    payloadJson
    activity
    lwt
    device {
      mac
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ThingResultNotificationGQL extends Apollo.Subscription<ThingResultNotificationSubscription, ThingResultNotificationSubscriptionVariables> {
    document = ThingResultNotificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BrokerUnregisteredClientsDocument = gql`
    query brokerUnregisteredClients {
  brokerUnregisteredClients {
    mac
    topic
    seen
    active
    lwt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BrokerUnregisteredClientsGQL extends Apollo.Query<BrokerUnregisteredClientsQuery, BrokerUnregisteredClientsQueryVariables> {
    document = BrokerUnregisteredClientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserOrganizationDocument = gql`
    query userOrganization {
  userOrganization {
    id
    first_name
    last_name
    email
    organization {
      id
      name
      sites {
        id
        name
        floors {
          id
          name
          zones {
            id
            name
            devices {
              mac
              name
              mqtt_topic
              configuredIcon
              deviceType {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserOrganizationGQL extends Apollo.Query<UserOrganizationQuery, UserOrganizationQueryVariables> {
    document = UserOrganizationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZoneDocument = gql`
    query zone($id: String!) {
  zone(id: $id) {
    id
    name
    devices {
      mac
      name
      mqtt_topic
      configuredIcon
      deviceType {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZoneGQL extends Apollo.Query<ZoneQuery, ZoneQueryVariables> {
    document = ZoneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }