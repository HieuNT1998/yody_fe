import { Fragment, useEffect, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import axios from 'axios';
import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline'


// const navigation = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Marketplace', href: '#' },
//     { name: 'Company', href: '#' },
// ]
var user = {
    phongBan: "",
    viTri: "",
    vp1: "",
    vp2: "",
    kcVP1: "",
    kcVP2: "",
    chieuCao: "",
    canNang: "",
    thayCa: "true",
    dropFile: null,
}

const selectViTriChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    user.viTri = event.target.value;
}

const select1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    user.vp1 = event.target.value;
};
const select2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    user.vp2 = event.target.value;
};

const select3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.kcVP1 = event.target.value;
};

const select4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.kcVP2 = event.target.value;
};

const select5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.chieuCao = event.target.value;
};

const select6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.canNang = event.target.value;
};
const select7Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    user.thayCa = event.target.value;
};

let isInit: boolean = false;
let isInitDepartment: boolean = false;


const apiURL = "http://192.168.9.84:8000"

var vanPhong: string[];
vanPhong = [];


var phongBanList: string[];
phongBanList = [];


var viTriITList: string[];
viTriITList = [];

var viTriKDList: string[];
viTriKDList = [];


export default function Form() {

    const [open, setOpen] = useState(false)
    const [openErr, setOpenErr] = useState(false)
    const [openProcess, setOpenProcess] = useState(false)
    const [dropFile, setFileSelected] = useState<File>()
    const [isBusy, setBusy] = useState(false)
    const [isPositionDone, setPosition] = useState(false)
    const [isIT, setIT] = useState(true)
    const selectPositionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        user.phongBan = event.target.value;
        if (user.phongBan === "IT") {
            setIT(true)
        }
        else {
            setIT(false)
        }
    }

    useEffect(() => {
        axios.get(apiURL + "/api/services/position/")
            .then(res => {
                if (!isInitDepartment) {
                    console.log(res)
                    for (let i = 0; i < res.data.length; i++) {
                        phongBanList.push(res.data[i].department_name);
                        if (res.data[i].department_name === "Phòng IT") {
                            viTriITList.push(res.data[i].name);
                        }
                        else {
                            viTriKDList.push(res.data[i].name);
                        }
                    }
                    if (res.data.length > 0) {
                        user.viTri = res.data[0].name;
                        user.phongBan = res.data[0].department_name;
                    }
                    setPosition(true)
                    isInitDepartment = true;
                }
            })
    }, [])

    useEffect(() => {
        axios.get(apiURL + "/api/services/office/")
            .then(res => {
                console.log(res)
                if (!isInit) {
                    for (let i = 0; i < res.data.length; i++) {
                        vanPhong.push(res.data[i].name)
                    }
                    if (res.data.length > 0) {
                        user.vp1 = res.data[0].name
                        user.vp2 = res.data[0].name
                    }
                    setBusy(true)
                    isInit = true;
                }
            })
    }, [])

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        console.log('fileList :>> ', fileList);
        if (!fileList) return;

        setFileSelected(fileList[0]);
    };
    const onSubmit = async () => {
        try {
            if (dropFile) {
                setOpenProcess(true)
                const url = apiURL + '/api/candidate/submit/'
                let form_data = new FormData()
                form_data.append('position', user.viTri)
                if (user.viTri === 'IT') {
                    form_data.append('first_office', "")
                    form_data.append('second_office', "")
                    form_data.append('time_to_first_office', "0")
                    form_data.append('time_to_second_office', "0")
                    form_data.append('height', "0")
                    form_data.append('weight', "0")
                    form_data.append('ready_ot', "")
                }
                else {
                    form_data.append('first_office', user.vp1)
                    form_data.append('second_office', user.vp2)
                    form_data.append('time_to_first_office', user.kcVP1)
                    form_data.append('time_to_second_office', user.kcVP2)
                    form_data.append('height', user.chieuCao)
                    form_data.append('weight', user.canNang)
                    form_data.append('ready_ot', user.thayCa)
                }
                form_data.append('file', dropFile)
                axios.post(url, form_data, {
                    headers: {
                        Authorization:
                            'token 4309695a9c83b777fc54d87a7ab54a582f0747ae',
                    },
                }).then(res => {
                    setOpenProcess(false)
                    setOpen(true);
                }).catch(err => {
                    setOpenProcess(false)
                    setOpenErr(true);
                })
                // console.log('req :>> ', req);
                // setOpenProcess(false)
                // if (req.status == 200) {
                //     setOpen(true);
                // } else {
                //     setOpenErr(true);
                // }
            } else {
                setOpenErr(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='py-12 lg:py-24 divide-gray-200'>
            <div className="bg-white mx-auto"  >
                <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 pb-16">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-900">Điền thông tin</h2>
                                <p className="mt-5 text-sm text-gray-700">
                                    Bạn hãy điền các thông tin dưới đây.
                                </p>
                            </div>
                            <div className="rounded-md bg-yellow-500 p-4">
                                <div className="ml-12">
                                    <div id="user-form" className='mx-auto'>
                                        <form className="space-y-8 divide-y divide-gray-200">
                                            <div className="space-y-8 divide-y divide-gray-200">
                                                <div className="pt-8">
                                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                        <div className="sm:col-span-8">
                                                            <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                Chọn phòng ban mà bạn muốn ứng tuyển
                                                            </label>
                                                            <div className="mt-1">
                                                                <select
                                                                    id="country"
                                                                    name="country"
                                                                    autoComplete="country-name"
                                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                    onChange={selectPositionChange}
                                                                >
                                                                    <option key="Phòng IT<" value="IT">Phòng IT</option>
                                                                    <option key="Phòng kinh doanh" value="Kinh Doanh">Phòng kinh doanh</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {isIT ?
                                                            <div className="sm:col-span-8">
                                                                <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                    Chọn vị trí mà bạn muốn ứng tuyển
                                                                </label>
                                                                <div className="mt-1">
                                                                    <select
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        onChange={selectViTriChange}
                                                                    >
                                                                        {isPositionDone && viTriITList && viTriITList.map((item) => {
                                                                            return (
                                                                                <option key={item} value={item}>{item}</option>
                                                                            )
                                                                        })}

                                                                        {/* <option key="Java Backend" value="Java Backend">Java Backend</option>
                                                                        <option key="ReactJS" value="ReactJS">ReactJS</option> */}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="sm:col-span-8">
                                                                <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                    Chọn vị trí mà bạn muốn ứng tuyển
                                                                </label>
                                                                <div className="mt-1">
                                                                    <select
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        onChange={selectViTriChange}
                                                                    >
                                                                        {isPositionDone && viTriKDList && viTriKDList.map((item) => {
                                                                            return (
                                                                                <option key={item} value={item}>{item}</option>
                                                                            )
                                                                        })}
                                                                        {/* <option key="Nhân viên Bán Hàng" value="Nhân viên Bán Hàng">Nhân viên Bán Hàng</option> */}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        }
                                                        {
                                                            !isIT ? <div className="sm:col-span-8">
                                                                <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                    Chọn văn phòng bạn ứng tuyển (Ưu tiên số 1)
                                                                </label>
                                                                <div className="mt-1">
                                                                    <select
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        onChange={select1Change}

                                                                    >
                                                                        {isBusy && vanPhong && vanPhong.map((item) => {
                                                                            return (
                                                                                <option key={item} value={item}>{item}</option>
                                                                            )
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div> : <></>
                                                        }

                                                        {!isIT ? <div className="sm:col-span-8">
                                                            <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                Chọn văn phòng bạn ứng tuyển (Ưu tiên số 2)
                                                            </label>
                                                            <div className="mt-1">
                                                                <select
                                                                    id="country"
                                                                    name="country"
                                                                    autoComplete="country-name"
                                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                    onChange={select2Change}
                                                                >
                                                                    {vanPhong && vanPhong.map((item) => {
                                                                        return (
                                                                            <option key={item} value={item}>{item}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div> : <></>
                                                        }
                                                        {!isIT ? <div className="sm:col-span-3">
                                                            <label htmlFor="email" className="block text-sm font-medium ">
                                                                Thời gian di chuyển đến văn phòng ưu tiên số 1
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    id="input-text"
                                                                    name="email"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                    onChange={select3Change}
                                                                    placeholder="Bao nhiêu thời gian (phút)"

                                                                />
                                                            </div>
                                                        </div>
                                                            : <></>}
                                                        {
                                                            !isIT ? <div className="sm:col-span-5">
                                                                <label htmlFor="email" className="block text-sm font-medium ">
                                                                    Thời gian di chuyển đến văn phòng ưu tiên số 2
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        id="input-text"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        onChange={select4Change}
                                                                        placeholder="Bao nhiêu thời gian (phút)"
                                                                    />
                                                                </div>
                                                            </div> : <></>
                                                        }

                                                        {
                                                            !isIT ? <div className="sm:col-span-3">
                                                                <label htmlFor="email" className="block text-sm font-medium ">
                                                                    Chiều cao
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        id="input-text"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        onChange={select5Change}
                                                                        placeholder="Chiêu cao (cm)"

                                                                    />
                                                                </div>
                                                            </div>
                                                                : <></>
                                                        }
                                                        {
                                                            !isIT ?
                                                                <div className="sm:col-span-5">
                                                                    <label htmlFor="email" className="block text-sm font-medium ">
                                                                        Cân nặng
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            id="input-text"
                                                                            name="email"
                                                                            type="email"
                                                                            autoComplete="email"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                            onChange={select6Change}
                                                                            placeholder="Cân nặng (kg)"
                                                                        />
                                                                    </div>
                                                                </div> : <></>
                                                        }
                                                        {
                                                            !isIT ?
                                                                <div className="sm:col-span-8">
                                                                    <label htmlFor="first-name" className="block text-sm font-medium ">
                                                                        Sẵn sàng làm việc thay ca
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                            onChange={select7Change}
                                                                        >
                                                                            <option value="true" >Sẵn sàng</option>
                                                                            <option value="false">Không sẵn sàng</option>
                                                                        </select>
                                                                    </div>
                                                                </div> : <></>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
            <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 divide-y divide-gray-200">
                {/* <form className="space-y-8 "> */}
                <div className="space-y-8">
                    <div>
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-900">Tải CV của bạn ở đây</h2>
                            <p className="mt-5 text-sm text-gray-700">
                                Bạn upload CV của bạn ở dưới nhé.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <div className="mt-1 flex justify-center px-6 pt-16 pb-16 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PDF, DOCX, DOC up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-center">
                        {/* <button
                                type="button"
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Hủy
                            </button> */}
                        <button
                            id='btn-submit'
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={onSubmit}
                        >
                            Ứng tuyển
                        </button>
                    </div>
                </div>
                {/* </form> */}
                {/* <UploadProgressBar /> */}
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
                                        <CheckIcon className="h-24 w-24 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5 space-y-8">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-indigo-900">
                                            Chúc mừng bạn đã <br /> ứng tuyển thành công
                                        </Dialog.Title>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 flex justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-900 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openErr}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpenErr}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Thất Bại
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Vui lòng kiểm tra lại kết nối mạng và thông tin các trường đã điền.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpenErr(false)}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openProcess} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpenProcess}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5 space-y-8">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-indigo-900">
                                            Đang xử lý <br /> Vui lòng chờ ...
                                        </Dialog.Title>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div >
    )
}
