# Class: Receipt

[CdvPurchase](../modules/CdvPurchase.md).[GooglePlay](../modules/CdvPurchase.GooglePlay.md).Receipt

## Hierarchy

- [`Receipt`](CdvPurchase.Receipt.md)

  ↳ **`Receipt`**

## Table of contents

### Constructors

- [constructor](CdvPurchase.GooglePlay.Receipt.md#constructor)

### Properties

- [orderId](CdvPurchase.GooglePlay.Receipt.md#orderid)
- [platform](CdvPurchase.GooglePlay.Receipt.md#platform)
- [purchaseToken](CdvPurchase.GooglePlay.Receipt.md#purchasetoken)
- [transactions](CdvPurchase.GooglePlay.Receipt.md#transactions)

### Methods

- [hasTransaction](CdvPurchase.GooglePlay.Receipt.md#hastransaction)
- [lastTransaction](CdvPurchase.GooglePlay.Receipt.md#lasttransaction)
- [refresh](CdvPurchase.GooglePlay.Receipt.md#refresh)

## Constructors

### constructor

• **new Receipt**(`purchase`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `purchase` | [`Purchase`](../interfaces/CdvPurchase.GooglePlay.Bridge.Purchase.md) |

#### Overrides

[Receipt](CdvPurchase.Receipt.md).[constructor](CdvPurchase.Receipt.md#constructor)

## Properties

### orderId

• `Optional` **orderId**: `string`

Unique order identifier for the transaction.  (like GPA.XXXX-XXXX-XXXX-XXXXX)

___

### platform

• **platform**: [`Platform`](../enums/CdvPurchase.Platform.md)

Platform that generated the receipt

#### Inherited from

[Receipt](CdvPurchase.Receipt.md).[platform](CdvPurchase.Receipt.md#platform)

___

### purchaseToken

• **purchaseToken**: `string`

Token that uniquely identifies a purchase for a given item and user pair.

___

### transactions

• **transactions**: [`Transaction`](CdvPurchase.Transaction.md)[]

List of transactions contained in the receipt

#### Inherited from

[Receipt](CdvPurchase.Receipt.md).[transactions](CdvPurchase.Receipt.md#transactions)

## Methods

### hasTransaction

▸ **hasTransaction**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transaction`](CdvPurchase.Transaction.md) |

#### Returns

`boolean`

#### Inherited from

[Receipt](CdvPurchase.Receipt.md).[hasTransaction](CdvPurchase.Receipt.md#hastransaction)

___

### lastTransaction

▸ **lastTransaction**(): [`Transaction`](CdvPurchase.Transaction.md)

#### Returns

[`Transaction`](CdvPurchase.Transaction.md)

#### Inherited from

[Receipt](CdvPurchase.Receipt.md).[lastTransaction](CdvPurchase.Receipt.md#lasttransaction)

___

### refresh

▸ **refresh**(`purchase`): `void`

Refresh the content of the purchase based on the native BridgePurchase

#### Parameters

| Name | Type |
| :------ | :------ |
| `purchase` | [`Purchase`](../interfaces/CdvPurchase.GooglePlay.Bridge.Purchase.md) |

#### Returns

`void`