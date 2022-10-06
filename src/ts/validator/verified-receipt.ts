namespace CDVPurchase2 {

    /** Receipt data as validated by the receipt validation server */
    export class VerifiedReceipt {

        /** Platform this receipt originated from */
        get platform(): Platform { return this.sourceReceipt.platform; }

        /** Source local receipt used for this validation */
        sourceReceipt: Receipt;

        /**
         * The collection of purchases in this receipt.
         *
         * An array of ValidatorPurchase
         */
        collection: VerifiedPurchase[];

        /** Tell the plugin that we've used the latest receipt */
        latestReceipt: boolean;

        /** Native transactions detail */
        nativeTransactions: Validator.Response.NativeTransaction[];

        /**
         * Optional warning message about this validation.
         *
         * It might be present when the server had to fallback to a backup validation solution (like a cached response or using local validation only).
         * This happens generally when communication with the platform's receipt validation service isn't possible (because it's down, there's a network issue, ...)
         *
         * Threat the content of this receipt accordingly.
         */
        warning?: string;

        /** Id of the product that have been validated. Used internally. */
        id: string;

        constructor(receipt: Receipt, response: Validator.Response.SuccessPayload['data']) {
            this.id = response.id;
            this.sourceReceipt = receipt;
            this.collection = response.collection ?? [];
            this.latestReceipt = response.latest_receipt;
            this.nativeTransactions = [response.transaction];
            this.warning = response.warning;
        }

        /** Update the receipt content */
        set(receipt: Receipt, response: Validator.Response.SuccessPayload['data']) {
            this.id = response.id;
            this.sourceReceipt = receipt;
            this.collection = response.collection ?? [];
            this.latestReceipt = response.latest_receipt;
            this.nativeTransactions = [response.transaction];
            this.warning = response.warning;
        }
    }

    /** A purchase object returned by the receipt validator */
    export interface VerifiedPurchase {

        /** Product identifier */
        id: string;

        /** Date of first purchase (timestamp). */
        purchaseDate?: number;

        /** Date of expiry for a subscription. */
        expiryDate?: number;

        /** True when a subscription is expired. */
        isExpired?: boolean;

        /** Renewal intent
         *
         * See <a href="#api-Types-RenewalIntent">enum RenewalIntent</a> */
        renewalIntent?: string;

        /** Date the renewal intent was updated by the user. */
        renewalIntentChangeDate?: number;

        /** The reason a subscription or purchase was cancelled.
         *
         * See href="#api-Types-CancelationReason">enum CancelationReason</a>. */
        cancelationReason?: CancelationReason;

        /** True when a subscription a subscription is in the grace period after a failed attempt to collect payment */
        isBillingRetryPeriod?: boolean;

        /** True when a subscription is in trial period */
        isTrialPeriod?: boolean;

        /** True when a subscription is in introductory pricing period */
        isIntroPeriod?: boolean;

        /** Identifier of the discount currently applied to a purchase.
         *
         * Correspond to the product's offerId. When undefined it means there is only one offer for the given product. */
        discountId?: string;

        /** Whether or not the user agreed or has been notified of a price change.
         *
         * See <a href="#api-Types-PriceConsentStatus">"enum PriceConsentStatus"</a>. */
        priceConsentStatus?: PriceConsentStatus;

        /** Last time a subscription was renewed. */
        lastRenewalDate?: number;
    }
}