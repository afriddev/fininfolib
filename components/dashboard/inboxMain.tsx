import { AiOutlineDelete } from "react-icons/ai";
import { CiCalendarDate, CiCircleRemove } from "react-icons/ci";

const InboxMain = () => {
  return (
    <>
      <main className=" bg-lightBlue w-full h-[90vh] overflow-auto p-6">
        <section>
          <div className="flex">
            <div className="w-2/6  h-fit flex flex-col justify-center items-center   ">
              <div className="flex  pl-6">
                <label className="text-3xl text-zinc-800 ">
                  Quick Messages{" "}
                </label>
              </div>
              <div className=" h-[77vh] p-4 w-full bg-white rounded-lg overflow-auto no-scrollbar space-y-4 mt-4 ">
                <Employee img={'my.jpeg'} name={"Shaik Afrid"} role={"Web Developer"} status={true} messages={0} />
                <Employee img={'ayesha.jpeg'} name={"Shaik Ayesha"} role={"UI&UX Designer"} status={false} messages={0}/>
                <Employee img={'employee2.jpg'} name={"John Ripper"} role={"App Developer"} status={false} messages={3}/>
                <Employee img={'employee3.jpg'} name={"Neha Johnson"} role={"NodeJS Developer"} status={true} messages={1}/>
                <Employee img={'employee4.jpg'} name={"Pooja Kerthi"} role={"JavaScript Developer"} status={true} messages={5}/>
                <Employee img={'employee5.jpg'} name={"Robert "} role={"App Developer"} status={false} messages={0}/>
                <Employee img={'employee6.jpeg'} name={"Cris"} role={"React Developer"} status={true} messages={1}/>
              </div>
            </div>
            <div className="w-full ml-6 mr-6 flex flex-col bg-white rounded-xl">
              <div className="flex   pt-4 pl-20">
                <label className="text-3xl text-zinc-800 ">Inboxes</label>
              </div>
              <div className="w-full bg-white flex flex-col mt-2 pl-6 pr-6 pt-4 h-[77vh] shadow-xl rounded-lg">
                <div className="flex pl-10 pr-10  w-full justify-evenly shadow-lg p-2 ml-4 pb-4 rounded-xl  ">
                  <div className="flex gap-x-2 justify-center items-center cursor-pointer">
                    <h2 className="border-b border-p text-p text-2xl">
                      All Messages
                    </h2>
                    <a className="text-p text-2xl ">(2)</a>
                  </div>
                  <div className="flex gap-x-2 justify-center items-center cursor-pointer">
                    <h3 className=" text-black text-2xl">Work</h3>
                    <a className="text-black text-2xl">(8)</a>
                  </div>
                  <div className="flex gap-x-2 justify-center items-center cursor-pointer">
                    <h3 className=" text-black text-2xl">Chat</h3>
                    <a className="text-black text-2xl">(21)</a>
                  </div>
                </div>
                <div className="w-full p-6 border border-zinc-100 rounded-xl h-full m-4">
                  <div className="w-full rounded-xl shadow-xl bg-gray-50 h-fit p-6 ">
                    <div className="flex ">
                      <div className="flex w-full justify-between ">
                        <div className="flex">
                        <div className="w-12 h-12 rounded-full">
                          <img
                            src="my.jpeg"
                            className="rounded-full object-fill"
                          />
                        </div>
                        <div className="flex flex-col pl-10 ">
                          <h2 className="text-lg text-black">Shaik afrid</h2>
                          <div className="flex justify-center items-center gap-x-2">
                            <label className="text-xs">Topic: </label>
                            <p className="text-xs text-gray-700">
                              About delivery time...
                            </p>
                          </div>
                        </div>
                        </div>
                        <div className="pt-2 pr-6">
                          <label
                            className="w-fit bg-purple-100 text-p h-fit text-md px-4 py-2 rounded-lg
                            "
                          >
                            Project
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 pb-2 w-full pl-20 pr-10 justify-center items-center ">
                        <p className="text-black">Develop a dedicated app and website for our restaurant's food delivery service. 
                        Enhance customer experience with a user-friendly interface, secure online ordering,
                         and efficient order management via our app or website....</p>
                    </div>
                    <div className="flex pl-20 pt-2 w-full justify-between">
                        <div className="flex gap-x-2">
                            <a className="text-2xl text-gray-800"><CiCalendarDate/></a>
                            <label className="text-lg text-gray-700">Monday</label>
                        </div>
                        <div className="flex gap-x-2 bg-orange-50 justify-center items-center h-fit w-fit px-4 py-2 rounded-xl">
                            <label className="text-red text-lg">Delete</label>
                            <a className="text-xl font-bold text-red"><AiOutlineDelete/></a>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

function Employee({img,name,role,status,messages}) {
  return (
    <>
      <div className="flex justify-between items-center w-full rounded-lg shadow-xl bg-white p-2 cursor-pointer">
        <div className="flex">
          <div className="w-12 ml-4 h-12 rounded-full object-fill ">
            <img src={img} className="rounded-full w-12 h-12 object-cover" />
          </div>
          <div className="pl-6 ">
            <div className="flex  items-center gap-x-2">
              <h2 className="text-lg text-sH ">{name}</h2>
              {status?<div className="w-3 h-3 rounded-full bg-pureGreen"></div>:null}
            </div>
            <a className="text-xs text-zinc-500">{role}</a>
          </div>
        </div>
        {
          messages >= 1?<div className="pr-6">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex justify-center items-center">
            <label className="text-p ">{messages}</label>
          </div>
        </div>:null
        }
      </div>
    </>
  );
}

export default InboxMain;
