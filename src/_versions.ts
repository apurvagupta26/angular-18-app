export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.0.0',
    name: 'angular-18-app',
    versionDate: '2024-11-09T16:00:38.376Z',
    gitCommitHash: 'df6d513',
    versionLong: '0.0.0-df6d513',
};
export default versions;
