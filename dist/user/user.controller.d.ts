import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<{
        isPriceSqm: boolean;
        _id: import("mongoose").Types.ObjectId;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, keyof Paths> & Paths;
        $clearModifiedPaths: () => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        $clone: () => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        $createModifiedPathsSnapshot: () => import("mongoose").ModifiedPathsSnapshot;
        $getAllSubdocs: () => import("mongoose").Document[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document[];
        $inc: (path: string | string[], val?: number) => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<import("./user.model").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        };
        $op: "save" | "validate" | "remove" | null;
        $restoreModifiedPathsSnapshot: (snapshot: import("mongoose").ModifiedPathsSnapshot) => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        $session: (session?: import("mongoose").ClientSession | null) => import("mongoose").ClientSession | null;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        };
        $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
        deleteOne: (options?: import("mongoose").QueryOptions) => import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, import("./user.model").User, "deleteOne", Record<string, never>>;
        depopulate: <Paths = {}>(path?: string | string[]) => import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, Paths>;
        directModifiedPaths: () => Array<string>;
        equals: (doc: import("mongoose").Document<unknown, any, any>) => boolean;
        errors?: import("mongoose").Error.ValidationError;
        get: {
            <T extends keyof import("./user.model").User>(path: T, type?: any, options?: any): import("./user.model").User[T];
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        id?: any;
        increment: () => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        invalidate: {
            <T extends keyof import("./user.model").User>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
            (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
        };
        isDirectModified: {
            <T extends keyof import("./user.model").User>(path: T | T[]): boolean;
            (path: string | Array<string>): boolean;
        };
        isDirectSelected: {
            <T extends keyof import("./user.model").User>(path: T): boolean;
            (path: string): boolean;
        };
        isInit: {
            <T extends keyof import("./user.model").User>(path: T): boolean;
            (path: string): boolean;
        };
        isModified: {
            <T extends keyof import("./user.model").User>(path?: T | T[], options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
            (path?: string | Array<string>, options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
        };
        isNew: boolean;
        isSelected: {
            <T extends keyof import("./user.model").User>(path: T): boolean;
            (path: string): boolean;
        };
        markModified: {
            <T extends keyof import("./user.model").User>(path: T, scope?: any): void;
            (path: string, scope?: any): void;
        };
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<import("./user.model").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => Array<string>;
        overwrite: (obj: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        $parent: () => import("mongoose").Document | undefined;
        populate: {
            <Paths = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, Paths>>;
            <Paths = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: import("mongoose").Model<any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, Paths>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        save: (options?: import("mongoose").SaveOptions) => Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: unknown;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>>;
        set: {
            <T extends keyof import("./user.model").User>(path: T, val: import("./user.model").User[T], type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        };
        toJSON: {
            (options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): import("mongoose").FlattenMaps<import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>;
            (options: import("mongoose").ToObjectOptions & {
                flattenObjectIds: false;
            }): import("mongoose").FlattenMaps<import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>;
            (options: import("mongoose").ToObjectOptions & {
                flattenObjectIds: true;
            }): {
                name: string;
                sur_name: string;
                email: string;
                password: string;
                role: import("./user.interface").RoleUser;
                companyId: string;
                image: string;
                birthday: Date;
                gender: string;
                phone: string;
                _id: string;
                __v: number;
            };
            (options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            (options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): {
                name: string;
                sur_name: string;
                email: string;
                password: string;
                role: import("./user.interface").RoleUser;
                companyId: string;
                image: string;
                birthday: Date;
                gender: string;
                phone: string;
                _id: string;
                __v: number;
            };
            <T = import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>(options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): import("mongoose").FlattenMaps<T>;
            <T = import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>(options: import("mongoose").ToObjectOptions & {
                flattenObjectIds: false;
            }): import("mongoose").FlattenMaps<T>;
            <T = import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>(options: import("mongoose").ToObjectOptions & {
                flattenObjectIds: true;
            }): import("mongoose").ObjectIdToString<import("mongoose").FlattenMaps<T>>;
            <T = import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>(options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): T;
            <T = import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }>(options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): import("mongoose").ObjectIdToString<T>;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions): import("./user.model").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            <T>(options?: import("mongoose").ToObjectOptions): import("mongoose").Default__v<import("mongoose").Require_id<T>>;
        };
        unmarkModified: {
            <T extends keyof import("./user.model").User>(path: T): void;
            (path: string): void;
        };
        updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        validate: {
            <T extends keyof import("./user.model").User>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): Promise<void>;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
            }): Promise<void>;
        };
        validateSync: {
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
                [k: string]: any;
            }): import("mongoose").Error.ValidationError | null;
            <T extends keyof import("./user.model").User>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
        };
        name: string;
        sur_name: string;
        email: string;
        password: string;
        role: import("./user.interface").RoleUser;
        companyId: import("mongoose").Types.ObjectId | null;
        image: import("mongoose").Types.ObjectId;
        birthday: Date;
        gender: string;
        phone: string;
        __v: number;
    }>;
}
