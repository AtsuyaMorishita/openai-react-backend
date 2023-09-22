import * as cdk from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaOpenaiReactStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //lambda関数の設定
    new NodejsFunction(this, "lambda", {
      entry: "src/handler.ts", // lambda 関数のエントリーポイント
      handler: "handler", // 実行する関数名
      runtime: Runtime.NODEJS_18_X,
    });
  }
}
