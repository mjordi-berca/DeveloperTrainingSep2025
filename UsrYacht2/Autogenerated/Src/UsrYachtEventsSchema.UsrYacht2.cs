namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ed9d454e-9b27-461c-829b-228f30ca8afc");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f6ebf25f-107d-4a80-990d-8a06030a10f2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,111,107,219,48,16,198,223,23,250,29,14,191,178,33,136,117,47,215,173,176,164,217,40,148,173,204,206,96,140,189,80,228,139,163,161,63,70,146,211,121,99,223,125,39,41,105,83,167,131,30,54,182,164,71,191,187,231,56,195,53,250,158,11,132,6,157,227,222,110,2,91,88,179,145,221,224,120,144,214,156,159,253,57,63,3,138,193,75,211,65,61,250,128,250,242,120,235,248,162,214,214,252,247,208,33,91,154,32,131,68,255,18,13,91,238,208,132,131,244,123,218,30,211,222,173,164,34,12,186,178,22,91,212,252,19,121,128,119,80,172,188,251,198,197,54,188,46,170,31,249,82,63,172,149,20,32,20,247,30,210,217,51,20,120,3,115,238,241,153,147,12,217,251,63,226,217,29,85,44,91,132,157,149,45,124,54,53,223,145,143,210,174,127,162,8,224,209,180,232,102,144,129,115,220,144,169,132,125,239,58,15,88,61,226,142,200,49,214,84,5,123,160,29,48,88,93,62,149,101,46,140,209,14,217,46,243,186,202,250,137,182,69,33,53,87,208,59,41,98,143,210,37,246,17,67,51,246,216,46,172,26,180,249,202,213,128,111,247,202,171,50,182,241,46,202,239,208,93,243,177,152,166,151,27,40,51,238,10,46,94,165,168,158,42,38,182,98,32,187,241,11,110,4,42,108,169,140,224,6,36,236,169,206,7,23,39,130,102,210,243,14,27,212,189,226,33,22,110,240,30,110,173,224,74,254,230,107,133,117,210,149,217,206,202,163,163,153,53,212,124,26,88,246,5,189,29,156,32,141,117,4,153,157,102,137,241,48,45,121,202,138,25,20,39,124,207,82,111,110,124,99,237,92,118,121,85,84,172,177,251,252,213,11,76,80,241,121,131,125,176,78,243,80,78,204,81,226,11,160,38,166,119,85,95,159,52,60,70,216,58,123,159,154,176,252,37,176,143,62,15,156,169,252,239,227,114,255,75,31,122,254,1,217,168,209,185,234,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("99a111fb-74d3-283e-25ac-84c1fdef9eca"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("f6ebf25f-107d-4a80-990d-8a06030a10f2"),
				CreatedInSchemaUId = new Guid("ed9d454e-9b27-461c-829b-228f30ca8afc"),
				ModifiedInSchemaUId = new Guid("ed9d454e-9b27-461c-829b-228f30ca8afc")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ed9d454e-9b27-461c-829b-228f30ca8afc"));
		}

		#endregion

	}

	#endregion

}

