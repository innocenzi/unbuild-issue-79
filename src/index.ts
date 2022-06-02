import { execaSync } from "execa";

export function execute(executable: string, ...params: string[]): string {
	return execaSync(executable, [...params])?.stdout
}
