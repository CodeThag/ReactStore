using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class updateBasketEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2282a429-6a27-44d7-a139-3ff911ad3867");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cf4ca982-708f-40da-b711-c371a0eba8b2");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Baskets");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c7c91742-37e0-4e0d-b56b-58b868ba4b37", "fd91ae18-1707-4d50-a9b6-e64326173647", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "53a5cc07-dfe2-4e67-984f-d2fd27c2e057", "aeb94e6d-2701-4c26-b3d8-123aa333c649", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53a5cc07-dfe2-4e67-984f-d2fd27c2e057");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c7c91742-37e0-4e0d-b56b-58b868ba4b37");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Baskets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2282a429-6a27-44d7-a139-3ff911ad3867", "5ad10b0f-e431-401d-85c4-9c2d6c3c37cd", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "cf4ca982-708f-40da-b711-c371a0eba8b2", "6ae9638b-32d2-47eb-99b8-fb59db303afd", "Admin", "ADMIN" });
        }
    }
}
