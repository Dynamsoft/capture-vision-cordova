declare module Dynamsoft {
    export interface Quadrilateral {
        points: Point[];
    }
    export interface Point {
        x: number;
        y: number;
    }
    export interface Region {
        regionBottom: number;
        regionRight: number;
        regionLeft: number;
        regionTop: number;
        regionMeasuredByPercentage: number | boolean;
    }
    export interface Rect {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    export interface BarcodeResult {
        /**
        * The barcode text.
        */
        barcodeText: string;
        /** 
        * The byte of barcodeText. 
        */ 
        barcodeBytes: string; 
        /**
        * Barcode type in string.
        */
        barcodeFormatString: string;
        /**
        * The corresponding localization result.
        */
        barcodeLocation: BarcodeLocationResult;
    }
    export interface BarcodeLocationResult {
        /**
         * The angle of a barcode. Values range from 0 to 360.
         */
        angle: number;
        /**
         * The quadrilateral
         */
        quadrilateral: Quadrilateral;
    }
    export interface DBRRuntimeSettings {
        barcodeFormatIds: number;
        barcodeFormatIds_2: number;
        expectedBarcodesCount: number;
        timeout: number;
    }
    export enum EnumDBRPresetTemplate {
        DEFAULT = 0,
        VIDEO_SINGLE_BARCODE = 1,
        VIDEO_SPEED_FIRST = 2,
        VIDEO_READ_RATE_FIRST = 3,
        IMAGE_SPEED_FIRST = 4,
        IMAGE_READ_RATE_FIRST = 5,
        IMAGE_DEFAULT = 6
    }
    export enum EnumBarcodeFormat {
        BF_ALL = -29360129,
        BF_ONED = 3147775,
        BF_GS1_DATABAR = 260096,
        BF_CODE_39 = 1,
        BF_CODE_128 = 2,
        BF_CODE_93 = 4,
        BF_CODABAR = 8,
        BF_CODE_11 = 2097152,
        BF_ITF = 16,
        BF_EAN_13 = 32,
        BF_EAN_8 = 64,
        BF_UPC_A = 128,
        BF_UPC_E = 256,
        BF_INDUSTRIAL_25 = 512,
        BF_CODE_39_EXTENDED = 1024,
        BF_GS1_DATABAR_OMNIDIRECTIONAL = 2048,
        BF_GS1_DATABAR_TRUNCATED = 4096,
        BF_GS1_DATABAR_STACKED = 8192,
        BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL = 16384,
        BF_GS1_DATABAR_EXPANDED = 32768,
        BF_GS1_DATABAR_EXPANDED_STACKED = 65536,
        BF_GS1_DATABAR_LIMITED = 131072,
        BF_PATCHCODE = 262144,
        BF_PDF417 = 33554432,
        BF_QR_CODE = 67108864,
        BF_DATAMATRIX = 134217728,
        BF_AZTEC = 268435456,
        BF_MAXICODE = 536870912,
        BF_MICRO_QR = 1073741824,
        BF_MICRO_PDF417 = 524288,
        BF_GS1_COMPOSITE = -2147483648,
        BF_MSI_CODE = 1048576,
        BF_NULL = 0
    }
    export enum EnumBarcodeFormat_2 {
        BF2_AUSTRALIANPOST = 8388608,
        BF2_DOTCODE = 2,
        BF2_NONSTANDARD_BARCODE = 1,
        BF2_NULL = 0,
        BF2_PHARMACODE = 12,
        BF2_PHARMACODE_ONE_TRACK = 4,
        BF2_PHARMACODE_TWO_TRACK = 8,
        BF2_PLANET = 4194304,
        BF2_POSTALCODE = 32505856,
        BF2_POSTNET = 2097152,
        BF2_RM4SCC = 16777216,
        BF2_USPSINTELLIGENTMAIL = 1048576
    }
    export interface TorchButton {
        location: Rect;
        visible: boolean;
        torchOnImage: string;
        torchOffImage: string;
    }
    export class DCVBarcodeReader {
        private constructor();
        static createInstance(): Promise<DCVBarcodeReader>;
        static initLicense(license: String): Promise<void>;
        static getVersion(): Promise<String>;
        startScanning(): void;
        stopScanning(): void;
        addResultListener(listener: (results: BarcodeResult[]) => void): void;
        getRuntimeSettings(): Promise<DBRRuntimeSettings>;
        outputSettingsToString(): Promise<String>;
        updateRuntimeSettings(settings: String | DBRRuntimeSettings | EnumDBRPresetTemplate): Promise<void>;
        resetRuntimeSettings(): void;
    }
    export class DCVCameraEnhancer {
        private constructor();
        static createInstance(): Promise<DCVCameraEnhancer>;
        open(): Promise<void>;
        close(): Promise<void>;
        turnOnTorch(): Promise<void>;
        turnOffTorch(): Promise<void>;
        setScanRegion(region: Region): Promise<void>;
        setScanRegionVisible(isVisible: boolean): void;
    }
    export class DCVCameraView {
        private htmlElement;
        private _htmlElementProp;
        private scrollListener;
        private orientationListener;
        private elementObserver;
        constructor();
        bindToHtmlElement(element: HTMLElement): void;
        setOverlayVisible(isVisible: boolean): void;
        setTorchButton(torchButton: TorchButton): void;
        private set htmlElementProp(value);
        private get htmlElementProp();
        private updateCameraViewPosition;
        private setCameraViewVisible;
        private elementDidChange;
        private setElementChangeListener;
    }
}
