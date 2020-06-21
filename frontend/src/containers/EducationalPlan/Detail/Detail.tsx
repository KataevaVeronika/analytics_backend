import React from 'react';
import get from 'lodash/get';
// @ts-ignore
import Scrollbars from "react-custom-scrollbars";

import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from "@material-ui/core/IconButton";

import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";

import ConfirmDialog from "../../../components/ConfirmDialog";
import CreateModal from "./CreateModal";
import ChangePlanModal from '../CreateModal';

import {BlocksOfWorkProgramsType, EducationalPlanType} from '../types';
import {EducationalPlanDetailProps} from './types';
import {EducationalPlanBlockFields, ModuleFields, BlocksOfWorkProgramsFields} from "../enum";
import {WorkProgramGeneralFields} from "../../WorkProgram/enum";

import connect from './Detail.connect';
import styles from './Detail.styles';

class EducationalPlan extends React.Component<EducationalPlanDetailProps> {
    state = {
        deleteConfirmId: null,
        anchorEl: null
    }

    componentDidMount() {
        const workProgramId = get(this, 'props.match.params.id');

        this.props.actions.getEducationalDetail(workProgramId);
    }

    handleClickDelete = (id: number) => () => {
        this.setState({
            deleteConfirmId: id
        });
    }

    handleConfirmDeleteDialog = () => {
        const {deleteConfirmId} = this.state;

        this.props.actions.deleteBlockOfWorkPrograms(deleteConfirmId);
        this.closeConfirmDeleteDialog();
    }

    closeConfirmDeleteDialog = () => {
        this.setState({
            deleteConfirmId: null
        });
    }

    handleClickEdit = (plan: EducationalPlanType) => () => {
        this.props.actions.openDialog(plan);
    }

    handleOpenDetailModal = (block: BlocksOfWorkProgramsType|{}, moduleId: number) => () => {
        this.props.actions.openDetailDialog({
            ...block,
            moduleId: moduleId
        });
    }

    handleChangePlan = () => {
        const {detailPlan} = this.props;

        this.props.actions.openDialog(detailPlan);
    }

    render() {
        const {classes, blocks} = this.props;
        const {deleteConfirmId} = this.state;

        return (
            <Paper className={classes.root}>
                <Typography className={classes.title}>
                    Учебный план
                </Typography>

                <div className={classes.tableWrap}>
                    <div className={classNames(classes.row, classes.header)}>

                    </div>

                    <div className={classes.list}>
                        <Scrollbars>
                            {blocks.map(block => {
                                return (
                                    <>
                                        <div className={classNames(classes.row, classes.blockRow)}>
                                            <Typography className={classes.titleCell}>{block[EducationalPlanBlockFields.NAME]}</Typography>
                                        </div>
                                        {block[EducationalPlanBlockFields.MODULES].map(module => {
                                            return (
                                                <>
                                                    <Typography className={classNames(classes.row, classes.moduleRow)}>
                                                        {module[ModuleFields.NAME]}
                                                        <AddCircleIcon className={classes.addProgramIcon}
                                                                       color="primary"
                                                                       onClick={this.handleOpenDetailModal({}, module[ModuleFields.ID])}
                                                        />
                                                    </Typography>
                                                    {module[ModuleFields.BLOCKS_OF_WORK_PROGRAMS].map(blockOfWorkProgram => {
                                                        return <div className={classes.moduleWorkProgramWrap}>

                                                            <div className={classes.moduleWorkProgramList}>
                                                                {blockOfWorkProgram[BlocksOfWorkProgramsFields.WORK_PROGRAMS].map(workProgram =>
                                                                    <Typography className={classes.workProgramRow}> {workProgram[WorkProgramGeneralFields.TITLE]} </Typography>
                                                                )}
                                                            </div>

                                                            <div className={classes.moduleWorkProgramWrapActions}>
                                                                <IconButton onClick={this.handleClickDelete(blockOfWorkProgram[BlocksOfWorkProgramsFields.ID])}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                                <IconButton onClick={this.handleOpenDetailModal(blockOfWorkProgram, module[ModuleFields.ID])}>
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </div>
                                                        </div>;
                                                    })}
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </Scrollbars>
                    </div>
                </div>

                <div className={classes.footer}>
                    <Fab color="secondary"
                         classes={{
                             root: classes.addIcon
                         }}
                         onClick={this.handleChangePlan}
                    >
                        <EditIcon />
                    </Fab>
                </div>

                <CreateModal />
                <ChangePlanModal />

                <ConfirmDialog onConfirm={this.handleConfirmDeleteDialog}
                               onDismiss={this.closeConfirmDeleteDialog}
                               confirmText={'Вы точно уверены, что хотите удалить блок?'}
                               isOpen={Boolean(deleteConfirmId)}
                               dialogTitle={'Удалить блок'}
                               confirmButtonText={'Удалить'}
                />
            </Paper>
        );
    }
}

export default connect(withStyles(styles)(EducationalPlan));
