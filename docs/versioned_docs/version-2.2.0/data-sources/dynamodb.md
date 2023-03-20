---
id: dynamodb
title: DynamoDB
---

# DynamoDB

ToolJet can connect to DynamoDB to read and write data.

## Connection

To add a new DynamoDB, click on the `+` button on data sources panel at the left-bottom corner of the app editor. Select DynamoDB from the modal that pops up.

ToolJet supports connecting to DynamoDB using **IAM credentials**, **AWS Instance Profile** or **AWS ARN Role**.

If you are using **IAM credentials**, you will need to provide the following details:

- **Region**
- **Access key**
- **Secret key**

It is recommended to create a new IAM user for the database so that you can control the access levels of ToolJet.

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/dynamodb/iam.png" alt="ToolJet - DynamoDB connection" width="600" />

</div>

To connect to DynamoDB using **AWS Instance Profile**, select the **Use AWS Instance Profile**. This will use the IAM role attached to the EC2 instance where ToolJet is running.
To access the metadata service of an ECS container and the EC2 instance, we use the WebIdentityToken parameter which is obtained from a successful login with an identity provider.

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/dynamodb/awsinstance.png" alt="ToolJet - DynamoDB connection" width="600" />

</div>

If you are using **AWS ARN Role**, you will need to provide the following details:

- **Region**
- **Role ARN**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/dynamodb/arn.png" alt="ToolJet - DynamoDB connection" width="600" />

</div>

Click on 'Test connection' button to verify if the credentials are correct and that the database is accessible to ToolJet server. Click on 'Save' button to save the data source.

## Querying DynamoDB

Click on `+` button of the query manager at the bottom panel of the editor and select the database added in the previous step as the data source. Select the operation that you want to perform and click 'Save' to save the query.

<img className="screenshot-full" src="/img/datasource-reference/dynamo-query.png" alt="ToolJet - Dynamo query" height="250"/>


Click on the 'run' button to run the query. NOTE: Query should be saved before running.

:::tip
Query results can be transformed using transformations. Read our transformations documentation to see how: [link](/docs/tutorial/transformations)
:::