import { Document } from 'mongoose';

export interface NeuropathCorr {
    _id: string;
    ensembl_gene_id: string;
    oddsratio: number;
    ci_lower: number;
    ci_upper: number;
    pval: number;
    pval_adj: number;
    neuropath_type: string;
}

export type NeuropathCorrDocument = NeuropathCorr & Document;
