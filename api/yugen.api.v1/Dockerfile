FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["api/yugen.api.v1/yugen.api.v1.csproj", "api/yugen.api.v1/"]
RUN dotnet restore "api/yugen.api.v1/yugen.api.v1.csproj"
COPY . .
WORKDIR "/src/api/yugen.api.v1"
RUN dotnet build "yugen.api.v1.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "yugen.api.v1.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "yugen.api.v1.dll"]