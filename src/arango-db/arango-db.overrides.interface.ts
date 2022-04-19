import { CollectionInsertOptions, DocumentCollection as OriginalDocumnetCollection } from 'arangojs/collection';
import { Document, DocumentData, DocumentMetadata } from 'arangojs/documents';

export interface DocumentCollection<U, T extends Record<string, any>> extends OriginalDocumnetCollection<T> {
    save(data: DocumentData<U|T>, options?: CollectionInsertOptions): Promise<DocumentMetadata & {
        new?: Document<T>;
    }>;
}