import React from 'react';

className Filter extends React.Component {
    render() {
        return (

        {/* Filter */} 
        <div className="mt-3 accordion" id="filterTop">
        <form method="post">
            <div className="btn-filter">
            <div className="filter-header">
                <span>Filter :</span>
            </div>
            <div className="filter-header">
                <a className="btn btn-sm shadow-sm collapsed" data-toggle="collapse" data-target="#kelas" role="button" aria-expanded="false" aria-controls="#kelas">Kelas</a>
                <div className="status" />
            </div>
            <div className="filter-header">
                <a className="btn btn-sm shadow-sm collapsed" data-toggle="collapse" data-target="#kereta" role="button" aria-expanded="false" aria-controls="#kereta">Kereta Api</a>
            </div>
            <div className="filter-header">
                <a className="btn btn-sm shadow-sm collapsed" data-toggle="collapse" data-target="#jam-berangkat" role="button" aria-expanded="false" aria-controls="#jam-berangkat">Waktu</a>
            </div>
            <div className="filter-header">
                <a className="btn btn-sm shadow-sm collapsed" data-toggle="collapse" data-target="#harga-tiket" role="button" aria-expanded="false" aria-controls="#harga-tiket">Harga</a>
            </div>
            <div className="filter-header">
                <input className="filter-reset btn btn-link" type="reset" defaultValue="Reset" />
            </div>
            </div>
            <div className="clearfix" />
            <div className="card bg-gradient-blue rounded mt-0 mb-0 pb-0">
            <div className="collapse" id="kelas" aria-labelledby="kelas" data-parent="#filterTop">
                <div className="form-group custom-control custom-checkbox">
                <ul>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="ekonomi" />
                    <label className="custom-control-label" htmlFor="ekonomi">Ekonomi</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="bisnis" />
                    <label className="custom-control-label" htmlFor="bisnis">Bisnis</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="eksekutif" />
                    <label className="custom-control-label" htmlFor="eksekutif">Eksekutif</label>
                    </li>
                </ul>
                </div>
            </div>
            <div className="collapse" id="kereta" aria-labelledby="kereta" data-parent="#filterTop">
                <div className="form-group custom-control custom-checkbox">
                <ul>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="argolawu" />
                    <label className="custom-control-label" htmlFor="argolawu">Argolawu</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="parahyangan" />
                    <label className="custom-control-label" htmlFor="parahyangan">Argo Parahyangan</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="fajarutama" />
                    <label className="custom-control-label" htmlFor="fajarutama">Fajar Utama</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="sembrani" />
                    <label className="custom-control-label" htmlFor="sembrani">Sembrani Priority</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="argobromo" />
                    <label className="custom-control-label" htmlFor="argobromo">Argo Bromo</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="argomuria" />
                    <label className="custom-control-label" htmlFor="argomuria">Argo Muria</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="argosindoro" />
                    <label className="custom-control-label" htmlFor="argosindoro">Argo Sindoro</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="argobromoa" />
                    <label className="custom-control-label" htmlFor="argobromoa">Argo Bromo Anggrek</label>
                    </li>
                </ul>
                </div>
            </div>
            <div className="collapse" id="jam-berangkat" aria-labelledby="jam-berangkat" data-parent="#filterTop">
                <div className="form-group custom-control custom-checkbox">
                <ul>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="pagi" />
                    <label className="custom-control-label" htmlFor="pagi">Pagi (00:00 - 11:00)</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="siang" />
                    <label className="custom-control-label" htmlFor="siang">Siang (11:00 - 15:00)</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="sore" />
                    <label className="custom-control-label" htmlFor="sore">Sore (15:00 - 18:30)</label>
                    </li>
                    <li>
                    <input className="custom-control-input" type="checkbox" id="malam" />
                    <label className="custom-control-label" htmlFor="malam">Malam (18.30:00 - 23:59)</label>
                    </li>
                </ul>
                </div>
            </div>
            <div className="collapse" id="harga-tiket" aria-labelledby="harga-tiket" data-parent="#filterTop">
                <div className="form-group custom-control">
                <div className="card-body pt-0 pb-1 pl-0 pr-4 w-60">
                    <p>
                    <input id="amount" type="text" readOnly className="form-control border-0 bg-transparent p-0" />
                    </p>
                    <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div className="ui-slider-range ui-corner-all ui-widget-header">
                    </div>
                    <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '10.4167%'}}>
                    </span>
                    <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '81.6667%'}}>
                    </span>
                    </div>
                </div> 
                {/* <input type="text" class="js-range-slider" name="my_range" value="" /> */} 
                </div>
            </div>
            </div>
        </form>
        {/* Sort Desktop */}
        <div id="sort-avail" className="card bg-white shadow-sm rounded pt-0 mb-3">
            <div className="card-body">
            <div className="row align-items-center">
                <div className="col-sm-2 col-md-3 col-lg-3 pl-0">
                <a href="#">Kereta Api <i className="fas fa-sort" /></a>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                <a href="#">Berangkat <i className="fas fa-sort" /></a>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                <a href="#">Tiba <i className="fas fa-sort" /></a>
                </div>
                <div className="col-sm-2 col-md-1 col-lg-1 pl-0">
                <a href="#">Durasi <i className="fas fa-sort" /></a>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                <a href="#">Harga  <i className="fas fa-sort" /></a>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                &nbsp;
                </div>
            </div> 
            </div>
        </div>
        {/* Sort Desktop end */}    
        </div>          
        {/* Filter end */}

        )
    }
}

export default Filter