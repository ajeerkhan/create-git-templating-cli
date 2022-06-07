import { promisify } from "util";
import { exec } from "child_process";
import {sync as loadJsonFile} from "load-json-file";
import { join } from "path";

const execPromise = promisify(exec);

async function runShellCmd(command) {
  try {
    console.log('command executed', command);
    const { stdout, stderr } = await execPromise(command);
    console.log(stdout);
    console.log(stderr);
  } catch (err) {
    console.error(err);
  }
}


async function tag() {
  await runShellCmd(`npm version patch`);
  const { version } = await loadJsonFile(join(process.cwd(), "package.json"));
  console.log('current tag version ', version);
  //await runShellCmd(`git config --global code.editor "code --wait"`);
  await runShellCmd(`git add .`);
  await runShellCmd(`git commit -m 'commit for ${version}'`);
  await runShellCmd(`git tag v${version}`);
  await runShellCmd(`git push`);
  await runShellCmd(`git push origin v${version}`);
}
tag();
