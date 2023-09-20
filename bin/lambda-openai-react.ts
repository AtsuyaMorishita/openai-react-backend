#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { LambdaOpenaiReactStack } from "../lib/lambda-openai-react-stack";

const app = new cdk.App();
new LambdaOpenaiReactStack(app, "LambdaOpenaiReactStack");
