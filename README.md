# E-commerce Integration

## Introduction

Đây là một thư viện hỗ trợ gọi API Google Auth. Thư viện bao gồm 1 service gọi API đi kèm những định nghĩa type dành cho typescript.

## Installation

```bash
$ npm install online-travel-tequila-service
```

## Config environment

```
CLIENT_EMAIL=
PRIVATE_KEY=
PROJECT_ID=
```

## EcommerceService

Muốn kết nối được với service Google Auth bạn cần có 3 key ở trên. Sau đó dùng hàm dưới đây để lấy access token.

```typescript
...
    npm install online-travel-tequila-service
    const tequilaService = new TequilaService({
        apiKey: "APi-KEY"
    });
...
```
