define("UsrYachtRentalFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrStartDate_5xam3yo",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrStartDate_5xam3yo"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrEndDate_tvot03t",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrEndDate_tvot03t"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_prpt05o",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrCustomer_prpt05o",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_2u37a9a",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2u37a9a_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Customer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrAmount_2o7fqzh",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrAmount_2o7fqzh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComment_x4o9n30",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrComment_x4o9n30"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrStartDate_5xam3yo": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrStartDate"
						}
					},
					"UsrYachtRentalDS_UsrEndDate_tvot03t": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrEndDate"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_prpt05o": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrAmount_2o7fqzh": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrAmount"
						}
					},
					"UsrYachtRentalDS_UsrComment_x4o9n30": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});