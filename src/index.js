import ora from "ora"; //ora 一个命令行loading效果
import inquirer from "inquirer"; //命令行交互
import shell from "shelljs"; // 运行shell脚本

export const handleCreate = async () => {
  try {
    let loading = ora("fetching template......");
    let answer = await inquirer.prompt([
      {
        type: "input", //你可以输入你自己的名称
        name: "projectName",
        message: "项目名称",
        default: "react-template-ts", //默认名
      },
    ]);
    // 项目名字
    let projectName = answer.projectName;
    loading.start();
    shell.exec(
      `git clone git@github.com:belleLily/cra-test.git ${projectName}`
    );
    loading.succeed();
    shell.exit(1);
  } catch (e) {
    console.log(e);
    shell.exit(-1);
  }
};
