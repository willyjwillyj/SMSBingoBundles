export interface OengusMarathon {
  defaultSetupTime: string;
  startDate: string;
}

export interface OengusSchedule {
  id: number;
  lines: OengusLine[];
}

export interface OengusLine {
  id: number;
  gameName: string | null;
  console: string | null;
  emulated: boolean;
  ratio: string | null;
  categoryName: string | null;
  estimate: string;
  setupTime: string;
  setupBlock: boolean;
  setupBlockText: string | null;
  customRun: boolean;
  position: number;
  categoryId: number | null;
  type: OengusRunType;
  runners: OengusUser[];
  customDataDTO: string | null;
}

export enum OengusRunType {
  single = 'SINGLE',
  race = 'RACE',
  coop = 'COOP',
  other = 'OTHER',
}

export interface OengusUser {
  id: number;
  username: string;
  usernameJapanese: string | null;
  enabled: boolean;
  twitterName?: string | null; // deprecated
  twitchName?: string | null; // deprecated
  speedruncomName?: string | null; // deprecated
  connections?: OengusUserConnections[]; // to be introduced
  pronouns?: string | string[] | null; // to be introduced
  country?: string | null; // to be introduced
}

export interface OengusUserConnections {
  id: number;
  platform: 'DISCORD' | 'SPEEDRUNCOM' | 'TWITCH' | 'TWITTER';
  username: string;
  usernameValidForPlatform: boolean;
}

export enum OengusRole {
  user = 'ROLE_USER',
}
