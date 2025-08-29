import React, {FC} from 'react';
import {Production_companies} from "@/models/IMovieDetails";
import {posterUrl} from "@/urls/urls";
type ProductCompaniesProps = {
    production: Production_companies
}

const ProductionCompaniesComponent:FC<ProductCompaniesProps> = ({production}) => {
    const fullLogoPath = posterUrl + '/w154' + production.logo_path;
    return (
        <div>
            {production.logo_path && <img src={fullLogoPath} alt={production.name}/>}
            <div>Name: {production.name}</div>
            <div>Original Country: {production.origin_country}</div>
        </div>
    );
};

export default ProductionCompaniesComponent;